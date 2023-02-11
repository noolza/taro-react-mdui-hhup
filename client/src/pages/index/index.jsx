import React, {useEffect, useState} from 'react'
import Taro,{getCurrentInstance} from '@tarojs/taro'
import {Swiper, SwiperItem} from '@tarojs/components';
import {Button,Card,Spinner} from '@mdui-react/mdui.react.es'
import classNames from 'classnames';
import './index.less';
// import {connect} from 'react-redux';
import {connect} from '@utils/connect';
import {Keys,useGlobalState,getGlobalState} from '../../constants/global-data';
import {defaultBanner} from "../../constants";

const Index = (props)=> {
  const [currentIdx,setCurrentIdx] = useState(0)
  const [btntext,setButtonText] = useState('开始体验')
  const [sharedId,setSharedId] = useState(0)
  const [disabled,setDisabled] = useState(false)
  const [postId,setPostId] = useState(0)
  const [commentId,setCommentId] = useState(0)
  const [banner,setBanner] = useGlobalState(Keys.KEY_INDEX_BANNER)
  const [systemInfo] = useGlobalState(Keys.KEY_SYSTEM_INFO)

  const getRouterParams = ()=>{
    const router = getCurrentInstance().router
    if(router.q){
      const {scene,id,postId,commentId} = router.q
      const decodeScene = decodeURIComponent(scene);
      console.log(decodeScene,scene)
      if(decodeScene) {
        const obj    = {};
        const params = decodeScene.split('&');
        for(const p of params) {
          const arr = p.split('=');
          if(arr.length === 2) {
            obj[arr[0]] = arr[1];
          }
        }
        setSharedId(obj.id || id)
        setPostId(obj.postId || postId)
        setCommentId(obj.commentId || commentId)
      }
    }
  }

  useEffect(()=>{
    if(!banner) {
      setBanner(defaultBanner)
    }
    getRouterParams()
    if(props.userId){
      setButtonText('开启中...')
      setBanner(banner.splice(1, 3))
      setDisabled(true)
      login();
    }
  },[])


  // state = {
  //   currentIdx: 0
  // };

  // constructor(props) {
  //   super(props);
  //   this.items   = GlobalData.getStorageSync(Keys.KEY_INDEX_BANNER) || [
  //     {
  //       title: '慧绘优品',
  //       des: '选最好的给你',
  //       color: '#d4e8c4',
  //       icon: require('@assets/images/banner/index_banner0.jpg') //cloud://hh-msj-049316.6868-hh-msj-049316-1257759357/assets/images/home/index_banner0.jpg'
  //     }
  //   ];
  //   this.btntext = '开始体验';
  //   const router = getCurrentInstance().router
  //   this.params = router.params;
  // }

  const login =()=>{
    props.dispatch({type: 'auth/login', shareId: sharedId}).then(() => {
      console.log('index props:',props)
      setBanner( defaultBanner)
      // Taro.switchTab({url: '/pages/home/index'});
    });
  }

  return(
      <div className='mdui-container-fluid mdui-theme-primary-light-green mdui-theme-accent-light-green'>
        <Swiper
          style={{height:`${systemInfo.windowHeight}px`}}
          // indicatorDots
          // indicator-color='#fae37c'
          // indicator-active-color='orange'
          onChange={(e) => {
            setCurrentIdx(e.detail.current);
          }}
        >
          {banner.map((item, idx) => (
            <SwiperItem key={idx} style={{background:`${item['color']}`}}>
              <div className={'mdui-grid-tile mdui-valign mdui-p-t-5'}>
                <a href=""><img src={item.icon}/></a>
              </div>
              <div className="mdui-typo mdui-valign mdui-p-t-5">
                <h4 className="mdui-center"><strong>{item.title}</strong></h4>
              </div>

              <div className="mdui-typo mdui-valign">
                <h5 className="mdui-center mdui-text-color-grey">{item.des}</h5>
              </div>

              <div className="mdui-row mdui-valign mdui-center mdui-p-t-5">
                  <Button
                    className='mdui-btn mdui-color-theme-a200'
                    // loading={this.loading}
                    disabled={disabled}
                    onClick={login}
                    // type='primary'
                  >{btntext}</Button>
              </div>
              {/*<Spinner colorful/>*/}
              {/*<div className='mdui-container item'>*/}
              {/*  <img src={item.icon} mode='widthFix' />*/}
              {/*  <div className='title'>{item.title}</div>*/}
              {/*  <div className='des'>{item.des}</div>*/}
              {/*  <Button*/}
              {/*    className='mdui-btn mdui-color-theme-a200'*/}
              {/*    // loading={this.loading}*/}
              {/*    disabled={disabled}*/}
              {/*    onClick={login}*/}
              {/*    // type='primary'*/}
              {/*  >{btntext}</Button>*/}
              {/*</div>*/}
            </SwiperItem>
          ))}
        </Swiper>
        {banner.length > 1 &&
        <div className='bannerDots'>
          {banner.map((_, didx) => {
            return (<div key={didx} className={classNames('dot', {active: currentIdx == didx})}></div>);
          })}
        </div>
        }
      </div>
    )
}

// export default connect(store => ({...store.auth}),null,null,{forwardRef: true})(Index)
// export default connect(({auth}) => ({...auth}),null,null,{forwardRef: true})(Index)
// export default connect(({auth}) => ({...auth}),Index)
export default connect('auth',Index)
