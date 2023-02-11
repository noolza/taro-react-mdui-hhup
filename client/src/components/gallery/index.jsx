import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import {View, Swiper, SwiperItem, Image, Button} from '@tarojs/components';
import './index.scss';
import PPT from "../ppt";
import classNames from 'classnames';
import Editor from "../editor-toolbar";
import empty from '@assets/images/empty.jpg'

export default class Gallery extends Component {
  static defaultProps = {
    list: []
  };

  state        = {
    current: 0
  };
  bannerSize   = {};
  minHeight    = 10000;
  handleChange = (e) => {
    const {current} = e.detail;
    this.setState({current});
    this.props.onChanged && this.props.onChanged(current)
  };

  handleImageLoad(idx, e) {
    const {ppt, list}    = this.props;
    var size             = e.detail;
    const winWidth       = Taro.systemInfo.windowWidth;
    var imgHeigh         = winWidth / parseInt(size.width) * parseInt(size.height);
    this.bannerSize[idx] = imgHeigh;
    if(this.minHeight > imgHeigh) {
      this.minHeight = imgHeigh;
    }
    const keys = Object.keys(this.bannerSize);
    if(keys.length == list.length) {
      if(ppt && list.length > 1)
        this.bannerSize[0] = this.minHeight;
      this.setState({});
    }
  }

  handleClick(idx) {
    this.props.onClick && this.props.onClick(idx);
  }

  showPanel(){

  }

  handleChanged(data){
    console.log(data==this.props.list)
    this.setState({})
  }
  render() {
    const {list, anim, ppt,marginLeft='0',marginRight='0',imgStyle='',autoplay} = this.props;
    const {current}         = this.state;
    const showPPT           = ppt && list.length > 1;
    // const sty = pause ? '-webkit-animation-play-state: paused !important;' :'';
    // console.log(sty)

    return (
      <View className='item-gallery'>
        <Swiper
          className='item-gallery__swiper'
          // current={current}
          // onChange={this.handleChange}
          onAnimationFinish={this.handleChange}
          style={{height: `${this.bannerSize[current]}px`}}
          previousMargin={marginLeft}
          nextMargin={marginRight}
          autoplay={autoplay}
        >
          {showPPT && <SwiperItem>
            <PPT banner={list} height={this.minHeight} onClick={this.handleClick.bind(this)} play={current == 0} />
          </SwiperItem>}

          {list.map((item, index) => {
            const url      = typeof item == 'string' ? item : item.img;
            const isActive = current == (index + (showPPT ? 1 : 0));
            return (
              <SwiperItem
                key={index}
                className='item-gallery__swiper-item'
                onClick={this.handleClick.bind(this, index)}
              >
                <Image
                  onLoad={this.handleImageLoad.bind(this, (index + (showPPT ? 1 : 0)))}
                  className={classNames('item-gallery__swiper-item-img', anim ? {'active': isActive} : null)}
                  src={url||empty}
                  mode='widthFix'
                  style={imgStyle}
                />
                <Editor move remove image link add key={index} data={list} onChanged={this.handleChanged.bind(this)} />
              </SwiperItem>
            );
          })}
          {/*<SwiperItem className='mdui-container-fluid'>*/}
          {/*  <Editor image data={list} key={list.length} onChanged={()=>{this.setState({})}} />*/}
          {/*</SwiperItem>*/}
        </Swiper>
        {/*<View className='item-gallery__indicator'>*/}
        {/*  <Text className='item-gallery__indicator-txt'>*/}
        {/*    {`${current + 1}/${list.length+1}`}*/}
        {/*  </Text>*/}
        {/*</View>*/}

        {/*<View className={classNames('item-title-base',{active:current>0})}>*/}
        {/*  <View className='item-title-base__header'>*/}
        {/*    <Text className='item-title-base__header-name'>{itemInfo.name}</Text>*/}
        {/*    <Text className='item-title-base__header-desc'>{itemInfo.simpleDesc}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}

        {/*{list.length > 1 &&*/}
        {/*<View className='bannerDots'>*/}
        {/*  {showPPT && <View className={classNames('dot_0', {active: current == 0})}></View>}*/}
        {/*  {list.map((_, didx) => {*/}
        {/*    return (*/}
        {/*      <View className={classNames('dot', {active: current == (didx + (showPPT ? 1 : 0))})} key={didx}></View>);*/}
        {/*  })}*/}
        {/*</View>*/}
        {/*}*/}
      </View>
    );
  }
}
