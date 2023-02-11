/**
 * Created by lhq on 2020/1/29 0029.
 */
import Taro from '@tarojs/taro';
import {createGlobalState} from 'react-hooks-global-state'

export const Keys = {
  KEY_COMMENT_ID:'postId',
  KEY_POST_ID:'commentId',
  KEY_USER_INFO:'userInfo',
  KEY_SEARCH_KEY:'searchKey',
  KEY_INDEX_BANNER:'indexBanner',
  KEY_NEW_POST:'newPostData',
  KEY_SYSTEM_INFO:'systemInfo',
  KEY_NAVIGATOR_HEIGHT:'navigatorHeight',
  KEY_TAB_BAR_HEIGHT:'tabBarHeight'
}

const initialState = {
  postId: 0 ,
  commentId:0,
  userInfo:{},
  systemInfo:{},
  indexBanner:Taro.getStorageSync(Keys.KEY_INDEX_BANNER)||[],
  newPostData:{}
};

export const { useGlobalState,getGlobalState,setGlobalState } = createGlobalState(initialState);
export default {Keys,useGlobalState,getGlobalState,setGlobalState}

// const GlobalData = {};
//
// export default {
//   set(key,value){
//     GlobalData[key] = value;
//   },
//   get(key){
//     return GlobalData[key];
//   },
//   getStorageSync(key,defaultVal=null){
//     const val = Taro.getStorageSync(key);
//     if(!val) {
//       return defaultVal;
//     }
//     return val
//   },
//   setStorageSync(key,val){
//     try{
//       Taro.setStorageSync(key,val)
//     } catch(e) {
//       console.log(e)
//     }
//   }
// }
