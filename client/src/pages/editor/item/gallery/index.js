import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import {View, Text, Swiper, SwiperItem, Image, Button, ScrollView, Input} from '@tarojs/components';
import './index.scss';
import '../../editor.scss';
// import {AtIcon} from "taro-ui";
// import PPT from "@components/ppt";
import classNames from 'classnames';
// import Server from "../../../../utils/server";
// import FS from "../../../../utils/fs";


export default class Gallery extends Component {
  static defaultProps = {
    list: []
  };

  state = {
    current: 0
  };

  handleChange = (e) => {
    const {current} = e.detail;
    this.setState({current});
  };

  handleImageLoad(idx, e) {
    var size     = e.detail;
    var imgHeigh = Taro.systemInfo.windowWidth / parseInt(size.width) * parseInt(size.height);
    this.setState({height: imgHeigh + 'px'});
    this.setState({});
  }

  onItemClick = (index) => {
    const {list} = this.props;
    const cur    = this.state.current;
    Taro.eventCenter.trigger('EVT_SHOW_IMAGEPICKER', (files,url) => {
      var urls = url ? [url] : [];
      if(files.length>0){
        urls = files.map(o=>o['url'])
      }
      if(urls.length == 0) return;

      var arg      = [cur, 1];
      arg = arg.concat(urls);
      Array.prototype.splice.apply(list, arg);
      this.setState({});
    },list[cur]);

    // FS.chooseImage().then(res => {
    //
    // });
  };

  handleRemoveImg = (index) => {
    // this.chooseFile()
    const {list} = this.props;
    if(list.length < 2) {
      Taro.showToast({
        title: '删除失败，最少上传一张照片',
        icon: 'none'
      });
      return;
    }
    console.log(index);
    list.splice(index, 1);
    var idx = index == list.length ? list.length - 1 : index;
    this.setState({current: idx});
  };

  handleChange = (e) => {
    const {current} = e.detail;
    this.setState({current});
  };

  moveTo(idx, dir) {
    const {list} = this.props;
    if(idx + dir < 0 || idx + dir >= list.length) {
      return;
    }
    var curEle      = list[idx];
    var toEle       = list[idx + dir];
    list[idx]       = toEle;
    list[idx + dir] = curEle;
    this.setState({});
  }

  render() {
    const {list, itemInfo}  = this.props;
    const {current, height} = this.state;
    const topHeight         = Taro.systemInfo.statusBarHeight;
    return (
      <View className='item-gallery'>
        <Swiper
          className='item-gallery__swiper'
          current={current}
          onChange={this.handleChange}
          style={{height: height}}
        >
          {list.map((item, index) => (
            <SwiperItem
              key={index}
              className='item-gallery__swiper-item'
            >
              <Image
                onLoad={index == 0 ? this.handleImageLoad.bind(this, index) : null}
                className='item-gallery__swiper-item-img'
                src={item || require('../../assets/empty.jpg')}
                mode='widthFix'
                onClick={this.onItemClick.bind(this, index)}
              />
              <View className='editor-banner-float-tl' style={`top:${topHeight}px`}>
                <Text className='eicon eicon-del' onClick={this.handleRemoveImg.bind(this, index)}/>
                <Text className='eicon eicon-move-left' onClick={this.moveTo.bind(this, index, -1)}></Text>
                <Text className='eicon eicon-move-right' onClick={this.moveTo.bind(this, index, 1)}></Text>
              </View>
            </SwiperItem>
          ))}
          <SwiperItem className='edit-banner__swiper-item'>
            <View className='big-add-btn' onClick={this.onItemClick.bind(this, list.length)}/>
          </SwiperItem>
        </Swiper>

        {/*<View className='item-gallery__indicator'>*/}
        {/*  <Text className='item-gallery__indicator-txt'>*/}
        {/*    {`${current + 1}/${list.length+1}`}*/}
        {/*  </Text>*/}
        {/*</View>*/}

        {/*<View className={classNames('item-title-base', {active: current > 0})}>*/}
        {/*  <View className='item-title-base__header'>*/}
        {/*    <Input className='item-title-base__header-name' placeholder='点击输入标题' value={itemInfo.name} onInput={(e) => {*/}
        {/*      itemInfo.name = e.detail.value;*/}
        {/*    }}></Input>*/}
        {/*    <Input className='item-title-base__header-desc' placeholder='点击输入副标题' value={itemInfo.simpleDesc}*/}
        {/*           onInput={(e) => {*/}
        {/*             itemInfo.simpleDesc = e.detail.value;*/}
        {/*           }}></Input>*/}
        {/*  </View>*/}
        {/*</View>*/}

        <View className='bannerDots at-row at-row__justify--center'>
          {list.map((_, didx) => {
            return (<View className={classNames('dot', {active: current == didx})}></View>);
          })}
        </View>
      </View>
    );
  }
}
