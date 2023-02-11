/**
 * Created by Administrator on 2020/1/7 0007.
 */
import Taro from '@tarojs/taro';
// import {HTTP_STATUS} from '../../constants/status';
// import {logError} from './logError';
// import {getOpenId} from "../../utils/auth";
// import {LIST} from "../../constants/counter";
import {CLOUD_IMG_PATH,APPID,CLOUD_ENV} from '../config';
import {IMG_TYPE} from "../constants";

var _FileCache = {};

export default {
  init(){
    if(Taro.getEnv() == Taro.ENV_TYPE.WEAPP){
      Taro.cloud.init({
        envName: CLOUD_ENV,
        mpAppId: APPID
      });
    }
  },

  login(params) {
    if(Taro.getEnv() != Taro.ENV_TYPE.WEB) {
      this.callFunction('login', params);
    }
  },

  getFileInfo: (path) => new Promise((resolve, reject) => {
    Taro.getFileInfo({
      filePath: path,
      digestAlgorithm: 'md5',
      success: (res) => {
        console.log(res);
        resolve(res);
      }
    });
  }),

  // 上传组件
  uploadFile: (data) => new Promise(((resolve, reject) => {
    console.log(data);
    const {path, files, success, fail, complete} = data;

    var that    = this;
    let i       = data.i ? data.i : 0; // 当前所上传的图片位置
    let succNum = data.succNum ? data.succNum : 0;//上传成功的个数

    var next = () => {
      i++;//这个图片执行完上传后，开始上传下一张
      if(i == files.length) {   //当图片传完时，停止调用
        _FileCache = {};
        if(complete) {
          complete(succNum, failNum);
          console.log(_FileCache);
        } else {
          Taro.showToast({
            title: '上传完成',
            icon: 'success',
            duration: 2000
          });
        }
        resolve(succNum, failNum);
        // resolve(files)
        console.log('成功：' + succNum + " 失败：" + failNum);
      } else { //若图片还没有传完，则继续调用函数
        data.i       = i;
        data.succNum = succNum;
        data.failNum = failNum;
        this.uploadFile(data);
      }
    };

    let failNum  = data.failNum ? data.failNum : 0;//上传失败的个数
    let filePath = files[i];
    //不是本地文件直接返回
    if(!filePath.startsWith('http://tmp/')) {
      success && success(i, {id: -1, fileName: '', url: filePath});
      next();
    } else {
      Taro.getFileInfo({filePath, digestAlgorithm: 'md5'}).then(info => {
        let fileExt  = filePath.slice(-4);
        let fileName = info.digest + fileExt;  //md5
        if(_FileCache[fileName]) {
          console.log(fileName);
          success && success(i, {id: _FileCache[info.digest], fileName: fileName, url: CLOUD + path + fileName});
          next();
        } else {
          if(Taro.getEnv() == Taro.ENV_TYPE.WEAPP) {
            Taro.cloud.uploadFile({
              cloudPath: path + fileName,
              filePath: filePath,
              success: (resp) => {
                console.log(fileName);
                success && success(i, {id: resp.fileID, fileName: fileName, url: CLOUD + path + fileName});
                _FileCache[fileName] = resp.fileID;
              },
              fail: (e) => {
                console.log(e);
                failNum++; //图片上传失败，图片上传失败的变量+1
                if(fail) {
                  fail(failNum);
                }
                Taro.showToast({
                  title: '上传失败(' + i + ')',
                  icon: 'fail',
                  duration: 2000
                });
              },
              complete: () => {
                next();
              }
            });
          }
        }
      });
    }
  })),

  async uploadImg(folder,filePath) {
    if(!filePath.startsWith('http://tmp/')) {
      console.warn('file is not local file: ' + filePath);
      return filePath;
    }

    var fileInfo = await Taro.getFileInfo({filePath, digestAlgorithm: 'md5'});
    let fileExt  = filePath.slice(-4);
    var fileName = fileInfo.digest + fileExt;
    console.log(fileInfo);
    if(_FileCache[fileName]) {
      console.warn(fileName + ' is already uploaded');
      return _FileCache[fileName];
    }

    try {
      var res              = await Taro.cloud.uploadFile({cloudPath: CLOUD_IMG_PATH + folder + '/' + fileName, filePath});
      _FileCache[fileName] = res.fileID;
      var keys             = Object.keys(_FileCache);
      if(keys.length > 100) {
        delete _FileCache[keys[0]];
      }
      var db      = Taro.cloud.database();
      var saveRes = await db.collection('assets').add({data: {fileId: res.fileID}});
      console.log('saveImage:', saveRes);
      return res.fileID;
    } catch(e) {
      return {error: e};
    }
  },

  async uploadImage(img,_type) {
    console.log(img);
    const userId = Taro.getStorageSync('userId');
    if(!userId){
      Taro.showToast({
        title: '请先授权',
        icon: 'fail',
        duration: 2000
      })
      return {error:'微信未授权'};
    }
    var imgInfo = await Taro.getImageInfo({src: img});
    const {height, width, type} = imgInfo;
    var imgObj = {height, width, type};
    if(img.indexOf('://tmp')<0){
      imgObj.path = img;
      return imgObj;
    }

    var fileInfo = await Taro.getFileInfo({filePath:img, digestAlgorithm: 'md5'});
    var digest = fileInfo.digest;

    if(_FileCache[digest]) {
      console.warn(digest + ' is already uploaded');
      imgObj.path=_FileCache[digest];
      return imgObj;
    }

    var fileName = `${userId}_${new Date().getTime()}.${type}`;//normal
    switch(_type) {
      case IMG_TYPE.AVATAR: // 头像
        fileName = 'u_'+fileName;
        break;
      case IMG_TYPE.POST: // 食谱
        fileName = 'p_'+fileName;
        break;
      case IMG_TYPE.BANNER: // banner
        fileName = 'b_'+fileName;
        break;
      case IMG_TYPE.COMMENT: // comment
        fileName = 'c_'+fileName;
        break;
      default:
        fileName = 'n_'+fileName;
        break;
    }
    console.log(fileName,img);
    // imgObj.path = CLOUD_IMG_PATH + userId + '/' + fileName
    // return imgObj
    const res = await Taro.cloud.uploadFile({cloudPath: CLOUD_IMG_PATH + userId + '/' + fileName, filePath: img}).then(res=>res).catch(e=>{error:e});
    console.log(res);
    if(res.fileID){
      _FileCache[digest] = res.fileID;
      imgObj.path          = res.fileID;
      var keys             = Object.keys(_FileCache);
      if(keys.length > 100) {
        delete _FileCache[keys[0]];
      }
      var db      = Taro.cloud.database();
      var saveRes = await db.collection('assets').add({data: {fileId: res.fileID, sendDate: Date.now()}});
      console.log('saveImage:', saveRes);
      return imgObj;
    } else {
      // Taro.showToast({
      //   title: '上传错误:'+res.error,
      //   icon: 'fail',
      //   duration: 2000
      // })
      return res;
    }
  },

  async uploadImages(imgs, _type) {
    if(!imgs||!imgs.length) return [];
    const userId = Taro.getStorageSync('userId');
    if(!userId){
      Taro.showToast({
        title: '请先授权',
        icon: 'fail',
        duration: 2000
      })
      return;
    }
    var objs     = [];
    for(const img of imgs) {
      var res = await this.uploadImage(img,_type);
      if(res.error){
        res.index = imgs.indexOf(img);
        return res;
      }
      objs.push(res);
    }
    return objs;
  },
};
