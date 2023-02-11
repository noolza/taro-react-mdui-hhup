import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components';
import './index.scss'
import jump from "@utils/jump";
// import {AtIcon} from "taro-ui";

// import {connect} from "@tarojs/redux";
import Server from "../../../utils/server";
import ImageSelector from "../../../components/image-selector";

export default class EditorBanner extends Component {
  static defaultProps = {
    list: [],
  }
  state={current:0,showPanel:false}
  toWebView = (item)=>{
    var target = item.target;
    jump({url:target});
  }

  UNSAFE_componentWillMount() {
    // Taro.eventCenter.on('EVT_SELECT_GOOD',this.onSelectGood.bind(this))
    // Taro.eventCenter.on('EVT_CLOSE_IMAGEPICKER',this.chooseFile.bind(this))
  }

  onSelectGood(item){
    var url=''
    if(!item._id){
      url = item.detail.value; //输入框
    } else{
      url = `/pages/item/item?itemId=${item._id}`
    }
    const { list } = this.props
    list[this.state.current]['target'] = url
    console.log(list[this.state.current])
  }

  changeUrl(item,idx){
    // this.setState({showList:true,current:idx})
    Taro.eventCenter.trigger('EVT_SHOW_GOODS',this.onSelectGood.bind(this));
  }
  removeImg(item,idx){
    const {list} = this.props
    if(list.length<2) {
      Taro.showToast({
        title:'删除失败，最少上传一张照片',
        icon:'none'
      })
    }
    list.splice(idx,1)
    this.setState({})
  }

  jump(item){
    console.log(item.content)
    Taro.navigateTo({
      url:item.target
    })
  }

  chooseFile = (files,url) => {
    const {list} = this.props
    const {current} = this.state
    var _url = files.length>0?files[0]['url']:url;
    // const filePathName = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles';
    // const params = {count:1};
    // console.log(files)
    var item = list[current] ? list[current] : {
              "backgroundColor": "#fff",
              "img": _url,
              "rank": current,
              "type": 1,
              "content": ""
            }
    item.img = _url;
    list[current] = item;
    this.setState({current:current})
    // this.setState({showPanel:false})
  //   Taro.chooseImage(params).then(res => {
  //     const targetFiles = res.tempFilePaths.map(
  //       (path, i) => ({
  //         url: path,
  //         file: res[filePathName][i]
  //       })
  //     )
  //     var url = targetFiles[0].url
  //     if(idx==null){
  //       list.push({
  //         "backgroundColor": "#054858",
  //         "img": url,
  //         "rank": 2,
  //         "type": 1,
  //         "content": ""
  //       },)
  //     } else {
  //       list[idx]['img'] = url;
  //     }
  //     this.setState({current:idx})
  //   }).catch(this.props.onFail)
  }

  async save() {
    const {list} = this.props
    for (var i = 0; i < list.length; i++) {
      Taro.showToast({
        title: '上传图片...',
        icon: 'loading',
        mask: true,
        duration: 100000,
      })
      let item = list[i]
      if (item.img.startsWith('http://tmp/')) {
        var brandName = "home"
        var path      = 'assets/images/' + brandName + '/'
        await Server.uploadFile({
          files: [item.img], path, success: (idx, res) => {
            item.img = res.url
          }
        })
      }
    }
  }

  showPanel(){
    // this.setState({showPanel:true})
    Taro.eventCenter.trigger('EVT_SHOW_IMAGEPICKER',this.chooseFile.bind(this));
  }

  render () {
    const { list,allItems } = this.props
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
          current={this.state.current}
          onChange={(e)=>this.setState({current:e.detail.current})}
        >
          {list.map((item,idx) => (
            <SwiperItem
              key={item.rank}
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.img}
                onClick={this.toWebView.bind(this,item)}
                mode='aspectFill'
              />
              <View className='editor-banner-float-tr'>
                <View className='at-row'>
                  <Text className='eicon eicon-link' onClick={this.changeUrl.bind(this,item,idx)} ></Text>
                  <Text className='eicon eicon-image' onClick={this.showPanel.bind(this)} ></Text>
                  <Text className='eicon eicon-del' onClick={this.removeImg.bind(this,item,idx)} />
                </View>
              </View>
            </SwiperItem>
          ))}
          <SwiperItem className='edit-banner__swiper-item'>
            <View className='big-add-btn' onClick={this.showPanel.bind(this)} />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
