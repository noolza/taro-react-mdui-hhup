const BaseController = require('./base-controller.js')
class UserController extends BaseController {
  constructor() {
    super()
  }
  async login(data, context) {
    let {
      shareId,
      openid
    } = data
    openid = openid || context.OPENID
    let user = await db.collection('users').doc(openid).field({
      openId: true,
      subscribe: true,
      userType: true,
      isAuth: true,
      grade: true,
      isBinding:true,
      fansNum:true,
      noticeCount:true,
      followNum:true,
      thumbsNum:true,
      commentsCount:true,
      userInfo:true
    }).get().then(res => {
      return res.data
    }).catch((err) => {
      console.log(err)
      return null
    });
    if (!user) {
      const data = {
        shareId,
        _id: context.OPENID,
        openId: context.OPENID,
        unionId: context.UNIONID,
        platform: 'wx',
        isAuth: false,
        isBinding:false,
        userType: 0,
        subscribe: false,
        fansNum:0,
        noticeCount:0,
        followNum:0,
        thumbsNum:0,
        commentsCount:0,
        grade:0,
        registerDate: Date.now(),
      };
      user = await db.collection('users').add({data})
      .then((res) => {
        return data;
      }).catch((err) => {
        console.log(err)
        return null
      })
    }
    return user
  }

  async bindInfo(userInfo, context) {
    var data = {
      userInfo,
      isBinding:true
    }
    return await db.collection('users').doc(context.OPENID).update({
      data
    }).then(() => this.success()).catch(() => this.fail())
  }

  async details(data, context) {
    const { id } = data;
    return await db.collection('users').doc(id).get().then(async res => {
      if (res.data) {
        res.data.isSelf = id === context.OPENID
        res.data.hasFollow = await db.collection('userFollows').where({
          openid: context.OPENID
        }).count().then(_res => {
          return _res.total > 0
        }).catch(() => {
          return false
        })
      }
      return this.success(res.data)
    }).catch(() => this.fail())
  }

  async follow(data, context) {
    const {
      toId
    } = data
    try {
      return await db.runTransaction(async transaction => {
        const hasNotice = await transaction.collection('userNotices').where({
          toId,
          fromId: context.OPENID,
          noticeType: 6
        }).count()
        if (await transaction.collection('userFollows').where({
          toId,
          fromId: context.OPENID,
        }).count()) {
          return true
        }
        let isUp = await transaction.collection('userFollows').add({
          data: {
            toId,
            fromId: context.OPENID,
            followDate: Date.now()
          }
        })
        if (!isUp) {
          await transaction.rollback(-100)
        }
        isUp = await transaction.collection('users').doc(context.OPENID).update({
          data: {
            followNum: _.inc(1)
          }
        })
        if (!isUp) {
          await transaction.rollback(-100)
        }
        isUp = await transaction.collection('users').doc(toId).update({
          data: hasNotice ? {
            fansNum: _.inc(1)
          } : {
              fansNum: _.inc(1),
              noticeCount: _.inc(1)
            }
        })
        if (!isUp) {
          await transaction.rollback(-100)
        }
        if (!hasNotice) {
          isUp = await transaction.collection('userNotices').add({
            data: {
              toId,
              fromId: context.OPENID,
              noticeType: 6,
              isRead: false,
              senDate: Date.now()
            }
          })
          if (!isUp) {
            await transaction.rollback(-100)
          }
        }
        return true
      }).then(() => {
        return this.success()
      }).catch(() => {
        return this.fail()
      })
    } catch (e) {
      return this.fail()
    }
  }
  async cancelFollow(data, context) {
    const {
      id
    } = data
    const userId = context.OPENID
    return await db.runTransaction(async transaction => {
      let isUp = await transaction.collection('userFollows').where({
        fromId: userId,
        toId: id
      }).remove()
      if (!isUp) {
        await transaction.rollback(-100)
      }
      isUp = await transaction.collection('userFollows').doc(userId).update({
        data: {
          followNum: _.inc(-1)
        }
      })
      if (!isUp) {
        await transaction.rollback(-100)
      }
      isUp = await transaction.collection('userFollows').doc(id).update({
        data: {
          fansNum: _.inc(-1)
        }
      })
      if (!isUp) {
        await transaction.rollback(-100)
      }
    }).then(() => {
      return this.success()
    }).catch(() => {
      return this.fail()
    })
  }

  async newData(data, context) {
    return await db.collection('users').doc(context.OPENID).field({
      _id: 1,
      nick: 1,
      isAuth: 1,
      noticeCount: 1,
      followNum: 1,
      fansNum: 1,
      isBinding:1
    }).get().then(res => this.success(res.data)).catch(() => this.fail())
  }

  async followList(data, context) {
    const {
      pageIndex,
      pageSize,
      type,
      userId
    } = data
    return await db.collection('users').where({
      [type === 0 ? 'fromId' : 'toId']: userId
    }).skip((pageIndex - 1) * pageSize)
      .limit(pageSize)
      .orderBy('followDate', 'DESC')
      .get()
      .then(async res => {
        for (item in res.data) {
          item.user = await db.collection('users').doc(item[type === 0 ? 'fromId' : 'toId']).fiel({
            openid: true,
            userType: true,
            isAuth: true,
            school: true,
            grade: true
          }).get(res => {
            return res.data && res.data[0] || null
          }).catch(() => {
            return null
          })
        }
        return this.success(res.data)
      }).catch(() => {
        return this.success([])
      })
  }

  async auth(data, content) {
    const {
      realName,
      authSrc
    } = data
    return await db.collection('users').doc(context.OPENID).update({
      data: {
        realName,
        authSrc,
        isAuth:true
      }
    }).then(() => this.success()).catch(() => {
      return this.fail()
    })
  }

  async qrCode(data, context) {
    const { postId, commentId } = data
    const userId = context.OPENID
    const scene = `id=${userId}`
    return await cloud.openapi.wxacode.getUnlimited({
      scene,
      width: 144,
      page: 'pages/index',
    }).then(async res => {
      if (res.errCode === 0) {
        return await cloud.uploadFile({
          cloudPath: `qrcode/${userId}.jpg`,
          fileContent: res.buffer,
        }).then(async res => {
          return await cloud.getTempFileURL({
            fileList: [res.fileID]
          }).then(_res => {
            if (_res.fileList[0].status === 0) {
              return this.success(_res.fileList[0].tempFileURL)
            }
            return this.fail(10001, _res.fileList[0].errMsg)
          }).catch((err) => this.fail(10002, err.message))
        }).catch((err) => {
          return this.fail(10003, err.message)
        })
      } else {
        return this.fail(10004, res.errmsg)
      }
    }).catch(err => this.fail(10005, err.message))
  }

  async getLikes(data,context) {
    const userId = context.OPENID;
    const _likes = []
    const items = await db.collection('likes')
    .where(_.and([{userId}, {likeType: 'post'}])).
      orderBy('sendDate', 'desc')
      .field({
        postId: true
      }).get().then(res => res.data).catch(() => null)

    var list = items.map(function(it) { return it.postId })
    const likes = await db.collection('posts')
    .aggregate()
    .match({_id:_.in(list)})
    .project({title:1,thumbsCount:1,primary:{"$arrayElemAt": [ "$banner", 0 ]}})
    .end().then(res=>res.list).catch(()=>null)

    return likes
  }

  async getComments(data,context) {
    const userId = context.OPENID;
    const items = await db.collection('comments')
    .where(_.or([{userId}, {childComments: _.elemMatch({userId})}]))
    .orderBy('sendDate', 'desc')
      .field({
        postId: true,
        userId: true,
        commentText:true,
        childComments:true,
        nickName:true,
      }).get().then(res => res.data).catch(() => null)

    if(!items){
      return []
    }

    const list = items.map(it=>it.postId)
    const posts = await db.collection('posts')
    .aggregate()
    .project({
      title:1,
      primary:{"$arrayElemAt": [ "$banner", 0 ]}
      // banner:{$slice:['$banner', 1]}
    })
    .match({_id:_.in(list)})
    .end()
    .then(res=>res.list).catch(()=>null)

    const obj = {};
    posts.map(p=>{obj[p._id]=p})
    items.map(it=>it.post = obj[it.postId]);

    console.log(posts,items);
    return items;
  }

  async getNotices(data,context) {
    const userId = context.OPENID
    const items = await db.collection('notices')
    .where({toId:userId}).
      orderBy('sendDate', 'desc')
      .get().then(res => res.data).catch(() => null)

    return items
  }
}
module.exports = UserController;
