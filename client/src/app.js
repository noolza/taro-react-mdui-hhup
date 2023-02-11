import Taro from '@tarojs/taro'
import React,{useEffect} from 'react'
import dva from './utils/dva';
import models from './models';
import server from "./server-api/server";
import {Keys,useGlobalState} from "./constants/global-data";
import { Provider } from 'react-redux'
import {getSystemInfo} from "./utils/systemInfo";
import '@mdui-react/index.less'

const store = dva.configStore(models)
const App = (props) => {
  const [systemInfo,setSystemInfo] = useGlobalState(Keys.KEY_SYSTEM_INFO)
  const [banner,setBanner] = useGlobalState(Keys.KEY_INDEX_BANNER)

  useEffect(()=>{
    console.log('app effect')
    const sys = getSystemInfo()
    setSystemInfo(sys)
    server.init();
  },[])

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
export default App
