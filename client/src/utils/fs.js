import Taro from "@tarojs/taro";

var getFileInfo=(path)=>new Promise((resolve, reject) => {
  Taro.getFileInfo({
    filePath:path,
    digestAlgorithm:'md5',
    success:(res)=>{
      console.log(res)
      resolve(res)
      // return res;
    }
  })
})


export default {
  chooseImage : (opt={}) => new Promise((resolve,reject)=>{
    const{count=99} = opt;
    const filePathName = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles';
    opt.success = async function (res) {
      resolve({paths:res.tempFilePaths,detail:res[filePathName]})
    }
    opt.fail = function (err) {
      reject(err);
    }
    opt.count = count;
    Taro.chooseImage(opt)
  })
}
