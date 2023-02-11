import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    userId:Taro.getStorageSync('userId') ? Taro.getStorageSync('userId'):'',
  },

  effects: {
    *save(_, { call, put }) {
      yield put(
        {
          type: 'save',
          payload: _.payload
        }
      )},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
