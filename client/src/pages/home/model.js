// import * as homeApi from './service';
import Taro from '@tarojs/taro';
import {CloudFunction} from "../../utils/request";

const homeInfo = (data) => CloudFunction('home', 'getHomeInfo', data);
const publish    = (data) => CloudFunction('home', 'publish', data);
const popular    = (data) => CloudFunction('post', 'getPopular', data);
export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    items: [],
    homeInfo:{},
    popular:{}
  },

  effects: {
    *getHomeInfo(_,{call,put}){
      try {
        const data = yield call(homeInfo,_.data);
        const payload = {
          homeInfo: data,
          banner: data['banner']
        }
        if(data.popular){
          payload.popular = data.popular
        }
        if(data.indexBanner){
          Taro.setStorageSync('indexBanner',data.indexBanner)
        }
        yield put({ type: 'save', payload });
      } catch(e) {
        console.log(e)
      }
    },

    *getPopular(_,{call,put,select}){
      try{
        const data = yield call(popular,_.data);
        const _popular = yield select(st=>st.home.popular);
        _popular.list = _popular.list.concat(data);
        yield put({ type: 'save',
          payload: {
            popular: _popular
          } });
        return data;
      } catch(e) {
        console.log(e)
      }
    },

    *publish(_,{call,put}){
      try{
        const data = yield call(publish,_.data);
        console.log(data)
        return data;
      } catch(e) {
        console.log(e)
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
