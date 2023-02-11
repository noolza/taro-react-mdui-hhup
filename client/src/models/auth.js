import Request, {CloudFunction} from '../server-api/request';
import Taro from "@tarojs/taro";
import Server from "../server-api/server";
import GlobalData from "../constants/global-data";

const login = (data) => CloudFunction('user', 'login', data);
const bindInfo = (data) => CloudFunction('user', 'bindInfo', data);
const env = Taro.getEnv()

export default {
  namespace: 'auth',
  state: {
    userId:Taro.getStorageSync('userId')||'1234',
    token:Taro.getStorageSync('token')||'',
    userInfo:Taro.getStorageSync('userInfo'),
    userData:{},
    isBinding:false
  },

  effects: {
    *login(_, { call, put, select }) {
      var token = Taro.getStorageSync('token');
      if(env == Taro.ENV_TYPE.WEAPP){
        try {
          yield call(Taro.checkSession);
        } catch(e) {
          const {code} = yield call(Taro.login);
          Taro.setStorageSync('token',code);
          token = code;
        }
      }

      const data = yield call(login,{shareId:_.shareId});
      console.log(data)
      Taro.setStorageSync('userId',data.openId);
      yield put({ type: 'save',
        payload: {
          userData: data,
          userId: data.openId,
          isBinding:data.isBinding,
          userInfo:data.userInfo,
          token
        }});
    },

    *bindUser(_, { call, put, select }) {
      var userInfo;
      try{
        var udata = yield call(Taro.getUserInfo)
        userInfo = udata.userInfo;
      } catch(e) {
        console.log(e);
        return false;
      }
      const data = yield call(bindInfo,userInfo);
      console.log(data);
      if(data.code!=0){
        return false;
      }
      Taro.setStorageSync('userInfo',userInfo);
      yield put({ type: 'save',
        payload: {
          isBinding:true,
          userInfo:userInfo
        }});
      return true;
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
