import {CloudFunction} from '@utils/request';

const itemInfo   = (data) => CloudFunction('post', 'getPost', data);

export default {
  namespace: 'item',
  state: {
    itemInfo:{}
  },

  effects: {
    * getItem(_, {call, put}) {
      const data = yield call(itemInfo, {id: _._id});
      console.log(data);
      yield put({
        type: 'save',
        payload: {
          itemInfo: data,
          comments: data.comments
        }
      });
      return data;
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
