import * as editorApi from './service';
import {CallFunction, CloudFunction} from "../../utils/request";

const publish    = (data) => CloudFunction('home', 'publish', data);
const removeItems    = (data) => CloudFunction('post', 'removePosts', data);

export default {
  namespace: 'editor',
  state: {
    allItems:[],
    category: []
  },

  effects: {
    *getItems(_,{call,put}){
      const {errMsg, data} = yield call(editorApi.allItems,{});
      console.log(data);
      if (errMsg == "collection.get:ok") {
        yield put({ type: 'save',
          payload: {
            allItems: data
          } });
      }
    },
    *getCategory(_,{call,put}){
      const {errMsg, data} = yield call(editorApi.category,{});
      console.log(data);
      if (errMsg == "collection.get:ok") {

        yield put({ type: 'save',
          payload: {
            category: data,
          } });
      }
    },
    *publish(_,{call,put}){
      const {errMsg, data} = yield call(editorApi.category,{});
      console.log(data);
      if (errMsg == "collection.get:ok") {

        yield put({ type: 'save',
          payload: {
            category: data,
          } });
      }
    },

    *removePosts(_,{call,put}){
      const data = yield call(removeItems,_.data);
      console.log(data);

    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
