import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import {AppBar, MdNavbar,MdSearch} from '../mdui';
import Editor from "../editor-toolbar";

const navBarHeight = 48;
const spaceHeight = Taro.systemInfo.customNavHeight - navBarHeight
class NavBar extends Component {
  static defaultProps ={
    prop:[]
  }
  state = {

  }

  handleClickAction(act) {
     this.props.onClickAction && this.props.onClickAction(act)
  };

  render() {
    const {title,autoHide,icons=[],className,children} = this.props;
    const statusBarHeight = Taro.systemInfo.customNavHeight-48;
    return (
      <View className='mdui-container-fluid'>
        <AppBar fixed autoHide={autoHide} shadow={false} className={className}>
          <View style={`height:${statusBarHeight}px;`} />
          <MdNavbar leftIcon={icons} title={title} className={className} onClickAction={this.handleClickAction.bind(this)} >{children}</MdNavbar>
        </AppBar>
      </View>
    )
  }
}

export default NavBar
