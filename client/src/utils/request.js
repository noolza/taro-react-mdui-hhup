import Taro from '@tarojs/taro';
import {CLOUD_FUNC_URL} from '../config';

export const Request = (options = {method: 'GET', data: {}}) => {
  console.log(
    `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
      options.data
    )}`
  );
  var root = options.url.indexOf('http') >= 0 ? options.url : CLOUD_FUNC_URL + options.url;
  return Taro.request({
    url: root,
    data: {
      // ...request_data,
      ...options.data
    },
    header: {
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase()
  }).then(res => {
    const {statusCode, errMsg} = res;
    console.log(res);
    if(statusCode >= 200 && statusCode < 300) {
      console.log(
        `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
        res.data
      );
      if(errMsg !== "request:ok") {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: 'none',
          mask: true
        });
      }
      return res;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

export const CallFunction = options => {
  const {name, method, data} = options;
  return Taro.cloud.callFunction({
    name: name,
    data: {
      event: method,
      data: data
    }
  }).then(res=>{
    console.log(res)
    if(res.errMsg=='cloud.callFunction:ok'){
      return res.result;
    }
  })
};

export const CloudFunction = (controller,method,data) => {
  return Taro.cloud.callFunction({
    name: 'hhup',
    data: {
      controller,
      method,
      data
    }
  }).then(res=>{
    console.log(res);
    if(res.errMsg=='cloud.callFunction:ok'){
      return res.result;
    }
  })
};
