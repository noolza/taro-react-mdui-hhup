import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import {AppBar, MdNavbar,MdSearch} from '../mdui';

class ImageCard extends Component {
  static defaultProps ={
    prop:[]
  }
  state = {

  }

  UNSAFE_componentWillMount() {

  };

  render() {
    const {title,autoHide,icons=[]} = this.props;
    return (
      <View className='mdui-container-fluid mdui-color-theme-400'>
        <AppBar fixed autoHide={autoHide}>
          <View className='mdui-color-theme-400' style={`height:${spaceHeight}px`} />
          <MdNavbar leftIcon={icons} title={title} className='mdui-color-theme-400' />
        </AppBar>
      </View>
    )
  }
}

export default NavBar
