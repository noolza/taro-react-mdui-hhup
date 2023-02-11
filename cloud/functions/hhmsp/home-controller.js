/**
 * Created by lhq on 2020/7/24 0024.
 */
const BaseController = require('./base-controller.js');
const err = require('./error-controller');
const {ERR,ERR_INFO} = err;

class HomeController extends BaseController {
	constructor() {
		super()
	}

	async getHomeInfo(data, context,api) {
    var newData = {
      "banner": [{
        "bgColor": "#054858",
        "img": "",
        "rank": 2,
        "type": 1,
        "content": ""
      }],
      "activity":{
        "show": true
      },
      "trial":{
        "show":true
      },
      "popular":{
        "show":false
      }
    }
    var res = await db.collection('home').limit(1).get()
    if(!res.data){
      await db.collection('home').add({newData})
      res = await db.collection('home').limit(1).get()
    }

    var homeInfo = res.data[0];
    if(data) {
      const {pageIndex=1,pageSize=10} = data;
      var postList = await api.post.getPopular({pageIndex,pageSize},context).catch(err => console.log(err));
      console.log(postList);
      homeInfo.popular = {title:'新品',list:postList};
    }
    return homeInfo;
	}

	async publish(data,context){
	  const {_id,banner,category} = data;
    return await db.runTransaction(async transaction => {
      const dat = {banner,category};
      var res;
      if(_id){
        res = await transaction.collection('home').doc(_id).update({data: dat}).catch(() => {return null});
      } else {
        dat.sendDate = Date.now();
        res = await transaction.collection('home').add({data: dat}).catch(() => {return null});
      }
      if (!res) {
        await transaction.rollback(-1)
      }
    }).then(() => {
      return this.success()
    }).catch((err) => {
      const errCode = _id?ERR.HOME_UPDATE:ERR.HOME_ADD
      return this.fail(errCode, err.message)
    })
  }
}

module.exports = HomeController;
