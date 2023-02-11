/* eslint-disable react/react-in-jsx-scope */
import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import {Text, View} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';
import NavBar from "../../components/nav-bar";
import Banner from "./banner";
import GoodsDrawer from "./goods-drawer";
import Items from "./items";
import Category from "./category";
import Server from "../../utils/server";
import ImageSelector from "../../components/image-selector";
import {IMG_TYPE} from "../../constants";

@connect(({editor,home}) => ({
  ...editor,...home,
}))
class Editor extends Component {
  config = {
    navigationBarTitleText: 'editor',
    enablePullDownRefresh: true,//使能微信小程序的下拉刷新
    backgroundTextStyle: 'dark', //顶部显示颜色为深色的三个点
  };
  state ={
    pageIndex:1,
    pageSize:50
  }
  constructor(props) {
    super(props);
  }
  onPullDownRefresh() {
    Taro.showToast({
      title: '加载中',
      icon:'loading'
    })

    this.componentDidShow();
  }
  componentDidShow() {
    const {pageSize=50,pageIndex=1} = this.state;
    this.props.dispatch({
      type: 'home/getHomeInfo',
      data:{pageSize,pageIndex:pageIndex}
    })
    this.props.dispatch({type:'editor/getCategory'});
    // this.props.dispatch({type:'home/getHomeInfo'}).then(res=>{
    //   this.props.dispatch({type:'editor/getCategory'});
    // });
    // this.props.dispatch({type:'editor/getItems'});
  }

  dispatchUpload(removeList) {
    this.props.dispatch({type:'editor/removePosts', data:removeList});
  };

  showGoodList() {
    this.setState({showGoods:true})
  }

  handleBack() {
    Taro.switchTab({url:'/pages/home/index'})
  }

  async onSave(){
    const { homeInfo } = this.props
    const {banner} = homeInfo;

    for(var i=0;i<banner.length;i++){
      var url = banner[i]['img']
      Taro.showToast({title:`图片上传中(${i+1}/${banner.length})`,icon:'loading',duration:10000});
      if(url.startsWith('http://tmp/')){
        var res = await Server.uploadImage(url,IMG_TYPE.BANNER);
        if(!res.error){
          banner[i]['img'] = res;
        } else {
          Taro.showToast({title:'图片上传失败:'+i,icon:'loading'});
          return;
        }
      }
    }
    Taro.showToast({title:'开始上传数据',icon:'loading', duration:10000});
    console.log(homeInfo);
    this.props.dispatch({type:'home/publish',data:homeInfo}).then(res=>{
      if(res.code == 0)
        Taro.showToast({title:'保存成功',icon:'success',duration:2000})
      else {
        Taro.showToast({title:'失败:'+res.msg,icon:'fail',duration:2000})
      }
    });


    // Server.callFunction('publish',{data:homeInfo,event:'updateHome'}).then(()=>{
    //   Taro.showToast({
    //     title: '上传成功',
    //   })
    // })
  }

  render() {
    const {homeInfo,banner,popular,category}        = this.props;
    console.log(popular);
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <View className='editor-page'>
        <NavBar back onBack={this.handleBack} >
          <Text className='eicon eicon-upload' onClick={this.onSave.bind(this)}></Text>
        </NavBar>
        <Banner list={banner} />
        <Category list={homeInfo.category} allList={category} />
        <Items list={homeInfo.popular} onSave={this.dispatchUpload.bind(this)} />
        <GoodsDrawer z-index={200} active={false} allItems={homeInfo.popular} />
        <ImageSelector isOpened={false} />
      </View>
    )
  }
}

export default Editor
