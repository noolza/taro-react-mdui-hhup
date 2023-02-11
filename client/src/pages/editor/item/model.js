import * as itemApi from './service';

export default {
  namespace: 'itemEditor',
  state: {
    itemInfo:{}
  },

  effects: {
    *getItem(_, { call, put }) {
      const {errMsg, data} = yield call(itemApi.itemInfo,{_id:_._id});
      console.log(data);
      if (errMsg == "collection.get:ok") {
        yield put({ type: 'save',
          payload: {
            itemInfo: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
