import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  opt.onAction = [createLogger()];
  // opt.onError = function(e) {
  //   e.preventDefault();
  //   console.error(e.message);
  // };
  app = create(opt);
  app.use(createLoading({}));

  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}
function configStore (models) {
  // const store = createStore(rootReducer, enhancer)
  // return store

  const dvaApp = createApp({
    initialState: {},
    models: models,
  });

  store = dvaApp.getStore();
  return store
}

export default {
  createApp,
  configStore,
  getDispatch() {
    return app.dispatch;
  },
};
