const BaseController = require('./base-controller.js')
const request = require("request");
const cheerio = require('cheerio');
const moment = require('moment');
moment.locale('zh-cn');
const err = require('./error-controller');
const {ERR,ERR_INFO} = err;

class PostController extends BaseController {
  constructor() {
    super()
  }

  async publish(data, context) {
    const {
      _id,
      title,
      content,
      type,
      primary,
      banner,
      tags,
      category,
      attrList,
      steps
    } = data;

    const userId = context.OPENID
    const user = await db.collection('users').doc(userId).get().then(res => res.data).catch(() => null)
    if (!user) {
      return this.fail(ERR.AUTH,ERR_INFO.AUTH)
    }

    const err = await this.checkContent(content);
    if(err){
      return this.fail(ERR.SECURITY,err);
    }

    return await db.runTransaction(async transaction => {
      const dat = {
        userId,
        title,
        content,
        type,
        primary,
        banner,
        tags,
        category,
        attrList,
        steps,
        thumbsCount: 0,
        commentsCount:0,
        viewCount: 0,
        sendDate: Date.now()
      }
      if(_id){
        res = await transaction.collection('posts').doc(_id).update({data: dat}).catch(() => {return null});
      } else {
        res = await transaction.collection('posts').add({data: dat}).catch(() => {return null});
      }
      if (!res) {
        await transaction.rollback(-1)
      }
    }).then(() => {
      return this.success(res)
    }).catch((err) => {
      const errCode = _id?ERR.POST_UPDATE:ERR.POST_ADD
      return this.fail(errCode, err.message)
    })
  }

  async removePosts(removeList, context){
    return await db.runTransaction(async transaction => {
      var res = await transaction.collection('posts').where({_id: {$in: removeList}}).remove().catch(() => {return null});
      if(!res){
        await transaction.rollback(-1)
      } else{
        return this.success();
      }
    }).then(()=>{
      return this.success();
    }).catch(e=>{
      return this.fail(ERR.POST_REMOVE,e.message)
    })
  }

  async checkImg(imgs){
    for(var i=0;i<imgs.length;i++){
      var img = imgs[0];
      const fileID = img.path
      const res = await cloud.downloadFile({
        fileID: fileID,
      })
      const buffer = res.fileContent
      try {
        var result = await cloud.openapi.security.imgSecCheck({
          media: {
            contentType:`image/${img.type}`,
            value: buffer
          }
        })
        if(result.errCode != 0){
          return result.errMsg;
        }
      } catch (err) {
        return err.errMsg
      }
    }
    return null;
  }

  async checkContent(content){
    if (content) {
      const _err = await cloud.openapi.security.msgSecCheck({
        content
      }).then(res => {
        console.log('res',res)
        return res.errCode === 0 ? null : res.errMsg
      }).catch((err) => {
        return err.message
      })
      console.log(_err)
      return _err;
    }
  }

  async comment(data, context) {
    const {
      toId,
      commentId='',
      commentText,
      imgs,
      postId,
    } = data
    if(!commentText){
      return this.fail(ERR.COMMENT_ADD,'comment is empty')
    }
    var secErr = await this.checkContent(commentText);
    if (secErr) {
      return this.fail(ERR.COMMENT_SECTXT, secErr);
    }

    var urls = [];
    if(imgs&&imgs.length){
      secErr = await this.checkImg(imgs)
      if(secErr){
        return this.fail(ERR.COMMENT_SECIMG,secErr)
      }
      urls = imgs.map(img=>img.path)
    }

    const userId = context.OPENID;
    const userInfo = await db.collection('users').doc(userId).field({userInfo:true}).get().then(res => {
      return res.data.userInfo
    }).catch(() => null);
    const cmt = {
      toId,
      commentId,
      commentText,
      imgs:urls,
      userId,
      postId,
      avatar:userInfo.avatarUrl,
      nickName: userInfo.nickName,
      sendDate: Date.now(),
    }
    return await db.runTransaction(async t => {
      var obj;
      if(commentId){
        obj = await t.collection('comments').doc(commentId).update({data:{childComments:_.push(cmt)}}).catch(() => null)
        if (!obj) {
          t.rollback(-1)
        }
      } else {
        cmt.childComments = [];
        cmt.thumbsCount = 0;
        obj = await t.collection('comments').add({data: cmt}).catch(() => null)
        if (!obj) {
          t.rollback(-1)
        }
        if (!await t.collection('posts').doc(postId).update({data: {commentsCount: _.inc(1)}}).catch(() => null)) {
          await t.rollback(-2)
        }
      }

      if (userId !== toId) {
        if (!await db.collection('notices').add({
          data: {
            toId,
            fromId: userId,
            postId,
            title:`[${userInfo.nickName}]回复了你`,
            content:commentText,
            noticeType: 'comment',
            sendDate: Date.now(),
            isRead: false
          }
        })) {
          await t.rollback(-4)
        }

        if (!await db.collection('users').doc(toId).update({data: {noticeCount: _.inc(1)}}).catch(() => 0)) {
          await t.rollback(-5)
        }
        if (!await db.collection('users').doc(userId).update({data: {commentsCount: _.inc(1)}}).catch(() => 0)) {
          await t.rollback(-6)
        }
      }
      return obj
    }).then(async (obj) => {
      if(!commentId) {
        cmt._id = obj._id;
      }
      // cmt.avatar = userInfo.avatarUrl;
      // cmt.nickName = userInfo.nickName;

      // if(commentId){
      //   const toInfo = await this.getUserInfo(toId);
      //   cmt.replyName = toInfo.nickName;
      //   cmt.replyAvatar = toInfo.avatarUrl;
      // }

      return this.success(cmt)
    }).catch((err) => this.fail(10001, err.message))
  }

  async like(data, context) {
    const {toId,postId,commentId,likeType} = data
    const userId = context.OPENID
    console.log(data)
    const dat = {
      userId,
      toId,
      postId,
      commentId,
      likeType,
      sendDate: Date.now(),
    }
    if(likeType=='post'){
      delete dat.commentId
    }
    const id = likeType == 'post'?postId:commentId;
    const condition = likeType=='post'?{postId}:{commentId}
    const findLike = await db.collection('likes').where(_.and([condition,{userId}])).count().then(res => res.total > 0).catch(() => false);
    if(findLike){
      return this.fail();
    }
    return await db.runTransaction(async t => {
      let res;
      res = await t.collection('likes').add({data:dat}).catch((e) => {console.log(1,e);return null;})
      if (!res) {
        t.rollback(-100)
      }

      const collName = likeType == 'post'?'posts':'comments';
      res = await t.collection(collName).doc(id).update({data: {thumbsCount: _.inc(1)}}).catch((e) => {console.log(2,e);return false});
      if (!res) {
        t.rollback(-100)
      }

      const data =  userId === toId ? {thumbsNum: _.inc(1)} : {thumbsNum: _.inc(1), noticeCount: _.inc(1)}
      res = await t.collection('users').doc(toId).update({data}).catch((e) => {console.log(3,e);return false})
      if (!res) {
        t.rollback(-100)
      }

      const userInfo = await this.getUserInfo(userId).then(res=>res.userInfo);
      const nick = userInfo['nickName']
      const title = likeType=='post'?`[${nick}]赞了你的食谱`:`[${nick}]赞了你的评论`

      const _hasLike = await db.collection('notices').where(condition).count().then(res => res.total > 0).catch(() => false)
      if (userId !== toId && !_hasLike) {
        res = await t.collection('notices').add({
          data: {
            toId,
            fromId: userId,
            postId,
            commentId,
            title,
            noticeType: 'like_'+likeType,
            sendDate: Date.now(),
            isRead: false
          }
        }).catch(() => null)
        if (!res) {
          t.rollback(-100)
        }
      }
    }).then(() => this.success()).catch((err) => this.fail(ERR.POST_LIKE, err.message))
  }

  async cancelLike(data, context) {
    const {
      likeType='post',
      postId
    } = data

    const postLike = await db.collection('likes')
      .where(_.and([{postId},{userId: context.OPENID,}]))
      .get()
      .then(res => res.data && res.data[0] || null)
      .catch(() => null)

    if (!postLike) {
      return this.fail(10001,'not found')
    }

    return await db.runTransaction(async t => {
      let res = await t.collection('likes').doc(postLike._id).remove().catch(() => null)
      if (!res) {
        await t.rollback(-100)
      }else {
        console.log(res)
      }

      res = await t.collection('posts')
        .doc(postId)
        .update({data: {thumbsCount: _.inc(-1)}})
        .catch((e) => {console.log(e); return false})
      if (!res){
        await t.rollback(-100)
      } else {
        console.log(res)
      }

      res = await t.collection('users').doc(postLike.toId).update({data: {thumbsNum: _.inc(-1)}}).catch(() => false)
      if (!res) {
        await t.rollback(-100)
      } else {
        console.log(res)
      }
    }).then(() => this.success()).catch((err) => this.fail(10001, err))
  }

  async getComments(data, context) {
    const {postId, pageIndex=1, pageSize=10} = data;
    const userId = context.OPENID
    const likes = await db.collection('likes')
    .where(_.and([{userId,likeType:'comment'}]))
    .field({commentId:true}).get()
    .then(res=>res.data).catch(()=>[])

    const likeComments = likes.map(l=>l.commentId);
    const comments = await db.collection('comments')
    .aggregate()
    .match({postId})
    .addFields({hasLike:{$in:['$_id',likeComments]}})
    .skip((pageIndex - 1) * pageSize)
    .limit(pageSize)
    .end().then(res => res.list).catch(() => [])

    for (const item of comments) {
      item.moment = moment(item.sendDate).fromNow();
      // if (item.commentId) {
      //   const toInfo = await this.getUserInfo(item.toId);
      //   item.replyAvatar = toInfo.avatarUrl;
      //   item.replyName = toInfo.nickName;
      // }
      // const {userInfo} = await this.getUserInfo(item.userId);
      // item.avatar = userInfo.avatarUrl;
      // item.nickName = userInfo.nickName;
    }
    return comments
  }

  async removeComment(data, context) {
    const {
      _id,
      subIdx,
      postId
    } = data
    // const _comment = await this.getByKey('comments', _id, {
    //   'commentText': true,
    //   'userId': true
    // })
    return await db.runTransaction(async t => {
      if(subIdx>=0){
        var cmt = await db.collection('comments').doc(_id).get().then(res=>res.data).catch(()=>false)
        if(!cmt){
          t.rollback(-100)
        }
        const subComments = cmt.childComments;
        subComments.splice(subIdx,1);
        var res = await db.collection('comments').doc(_id).update({data:{childComments:_.set(subComments)}}).catch(() => false)
        if (!res) {
          t.rollback(-100)
        }
      } else {
        var res = await db.collection('comments').doc(_id).remove().catch(()=>false)
        if(!res){
          t.rollback(-100)
        }
        res = await db.collection('posts').doc(postId).update({data: {commentsCount: _.inc(-1)}}).catch((e) =>false)
        if(!res){
          t.rollback(-100)
        }
      }
    }).then(() => this.success()).catch((err) => this.fail(ERR.COMMENT_UPDATE, err.message))

    return this.fail()
  }

  async hotComment(data, context) {
    const {
      id,
      userType
    } = data
    const _comment = await this.getByKey('comments', id, {
      'commentText': true,
      'fromId': true
    })
    if (_comment && userType === 1) {
      return await db.runTransaction(async t => {
        if (_comment.isHot) {
          if (!await (t.collection('comments').doc(id).update({
            data: {
              isHot: false
            }
          })).catch(() => false)) {
            t.rollback(-100)
          }
        } else {
          if (!await t.collection('comments').doc(id).update({
            data: {
              isHot: true
            }
          })) {
            t.rollback(-100)
          }
          const _msg = `你的评论「${_comment.commentText}」已被系统选为热评`
          const message = await t.collection('message').add({
            data: {
              content: _msg,
              contentType: 0,
              createDate: Date.now()
            }
          }).catch(() => null)
          if (!message) {
            t.rollback(-100)
          }

          if (!await t.collection('users').doc(_comment.fromId).update({
            data: {
              sysMsgCount: _.inc(1)
            }
          }).catch(() => false)) {
            t.rollback(-100)
          }
        }
      }).then(() => this.success()).catch((err) => this.fail(10001, err.message))
    }
    return this.fail()
  }

  async _getHotComment(postId) {
    return await db.collection('comments').where(_.and([{
      postId
    }, {
      commenType: 0
    }, {
      isHot: true
    }])).limit(1).field({
      fromId: true,
      content: true,
      imgs: true
    }).get().then(res => res.data && res.data[0] || null).catch(() => null)
  }

  async _hasLike(likeType, postId, userId) {
    return db.collection('likes')
      .where(_.and([{likeType}, {userId}, {postId}]))
      .count()
      .then(res => res.total > 0)
      .catch(() => false)
  }

  async search(data,context){
    console.log(data);
    const {keyword,pageIndex=1,pageSize=10} = data;
    const list = await db.collection('posts')
      .aggregate()
      .match(_.or([{
        "title": {$regex: '.*' + keyword, $options:'i'}
      }, {
        "content": {$regex: '.*' + keyword, $options:'i'}
      }, {
        'tags':{$elemMatch:{$all:[keyword]}}
      }, {
        "category":{value:{$eq:keyword}}
      }]))
      .project({title:1,thumbsCount:1,primary:{"$arrayElemAt": [ "$banner", 0 ]}})
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize)
      .end().then(res => res.list)
      .catch((e) => this.fail(0,e))
    return list;
  }

  async getPopular(data, context) {
    const {
            pageIndex,
            pageSize
          } = data
    const userId = context.OPENID
    const items = await db.collection('posts')
      .aggregate()
      .lookup({
        from:'comments',
        let:{pId:'$_id'},
        pipeline: $.pipeline()
        .sort({sendDate:-1})
        .match(_.expr($.eq(['$postId', '$$pId'])))
        .project({_id: 1, avatar:1, commentText:1})
        .limit(3)
        .done(),
        as: 'comments',
      })
      .lookup({
        from:'likes',
        let:{
          uId:userId,
          pId:'$_id'
        },
        pipeline: $.pipeline()
        .match(_.expr($.and([
          $.eq(['$userId', userId]),
          $.eq(['$postId', '$$pId'])
        ])))
        .project({_id: 1})
        .done(),
        as:'likes'
      })
      .project({
        title:1,
        banner:1,
        thumbsCount:1,
        commentsCount:1,
        hasLike:{'$anyElementTrue':['$likes']},
        comments:1,
        userId:1,
        sendDate:1
        // comments:{'$slice': ['$comments',0,3]}
        // comment:{'$arrayElemAt':['$comments',0]}
      })
      .sort({commentsCount:-1,thumbsCount:-1,sendDate:-1})
      .skip((pageIndex - 1) * pageSize)
      .limit(pageSize)
      .end().then(
      res => res.list
      ).catch(() => [])
    return items
  }

  async getPost(data,context){
    const {id} = data;
    const userId = context.OPENID

    const post = await db.collection('posts')
    .aggregate()
    .match({_id:id})
    .lookup({
      from:'likes',
      let:{
        uId:userId,
        pId:'$_id'
      },
      pipeline: $.pipeline().match(_.expr($.and([
        $.eq(['$userId', userId]),
        $.eq(['$postId', '$$pId'])
      ]))).project({_id: 1}).done(),
      as:'likes'
    })
    // .lookup({
    //   from:'comments',
    //   // localField: '_id',
    //   // foreignField: 'postId',
    //   let:{
    //     pId:'$_id'
    //   },
    //   pipeline: $.pipeline()
    //   .match(_.expr($.eq(['$postId', '$$pId'])))
    //   .limit(10)
    //   .done(),
    //   as:'comments'
    // })
    .addFields({
      hasLike:{'$anyElementTrue':['$likes']},
    })
    .project({
      likes:0
    })
    .end()
    .then(res=>res.list[0])
    .catch(()=>null)

    const comments = await this.getComments({postId:id},context);
    post.comments = comments
    // post.hasLike = await this._hasLike('post', id, context.OPENID)
    return post;
  }

  async getCategory(data,context){
    const res = await db.collection('category').limit(50).get();
    return res.data;
  }
}

module.exports = PostController;
