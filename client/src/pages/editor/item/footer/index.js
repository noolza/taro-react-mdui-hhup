import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Text, Image, Input, Button, Picker} from '@tarojs/components';
// import { ButtonItem } from '@components'
import jump from '@utils/jump'
import homeIcon from './assets/home.png'
import serviceIcon from './assets/service.png'
// import cartIcon from './assets/cart.png'
import './index.scss'
// import {AtIcon} from "taro-ui";
// import "taro-ui/dist/style/components/icon.scss";

const NAV_LIST = [{
  key: 'home',
  img: homeIcon,
  url: '/pages/home/home'
}, {
  key: 'service',
  img: serviceIcon
}]

export default class Footer extends Component {
  static defaultProps = {
    onAdd: () => {}
  }

  state = {
    classify:'',
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    const {category,itemInfo} = this.props;
    this.setState({classify:itemInfo.classify||''})
  }

  handleNav = (item) => {
    if (item.key === 'service') {
      Taro.showToast({
        title: '敬请期待',
        icon: 'none'
      })
    } else {
      jump({ url: item.url, method: 'switchTab' })
    }
  }

  handleBuy = () => {
    Taro.showToast({
      title: '暂时只支持加入购物车',
      icon: 'none'
    })
  }

  onInput(e){
    this.setState({classify:e.detail.value})
  }

  onSave(){
    this.props.onSave(this.state.classify)
  }

  render () {
    const {category} = this.props;

    return (
      <View className='item-footer'>

        {/*{NAV_LIST.map(item => (*/}
        {/*  <View*/}
        {/*    key={item.key}*/}
        {/*    className='item-footer__nav'*/}
        {/*    onClick={this.handleNav.bind(this, item)}*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className='item-footer__nav-img'*/}
        {/*      src={item.img}*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*))}*/}

        <View className='item-footer__input'>
          <Input placeholder='文件名称' value={this.state.classify} onInput={this.onInput} />
        </View>
        <View className='item-footer__nav'>
          <View onClick={this.props.onHistory}>
            <Text className='eicon eicon-history'></Text>
          </View>
        </View>
        <View className='item-footer__nav' onClick={this.props.onSave.bind(this,this.state.brandName)}>
          <Text className='eicon eicon-upload'></Text>
        </View>
        {/*<View className='item-footer__btn' onClick={this.props.onSave.bind(this,this.state.brandName)}>*/}
        {/*  <Text className='item-footer__buy-txt'>保存</Text>*/}
        {/*</View>*/}

        {/*<Picker className='item-footer__btn' mode='selector' range={category} onChange={this.props.selectCategory}>*/}
        {/*  <View>{this.state.cate}</View>*/}
        {/*</Picker>*/}

        <View
          className='item-footer__btn'
          onClick={this.props.showCategory}
        >分类</View>
      </View>
    )
  }
}
