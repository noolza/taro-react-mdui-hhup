const codeStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// import {ERR,ERR_INFO} from './error-controller'

class BaseController {
  constructor() {}
  success(data) {
    return {
      code: 0,
      data,
    };
  }
  fail(errorCode = 0, msg = '') {
    return {
      errorCode,
      msg,
      code: -1,
    };
  }
  async getUserInfo(id) {
    return await this.getByKey('users', id, {
      userInfo: true,
    })
  }
  async getByKey(tableName, id, fields) {
    return await db.collection(tableName).doc(id).field(fields).get().then(res => {
      return res.data
    }).catch(() => null)
  }
  getId() {
    var ret = ''
    var ms = (new Date()).getTime()
    ret += this.base62encode(ms, 6)
    ret += this.base62encode(Math.ceil(Math.random() * (62 ** 6)), 6)
    return ret
  }
  base62encode(v, n) {
    var ret = ""
    for (var i = 0; i < n; i++) {
      ret = codeStr[v % codeStr.length] + ret
      v = Math.floor(v / codeStr.length)
    }
    return ret
  }
}
module.exports = BaseController;
