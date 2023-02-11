import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View } from '@tarojs/components';
import './index.scss';
import Editor from "../../../components/editor-toolbar";

class Tuan extends Component {

  state = {

  }

  UNSAFE_componentWillMount() {

  };

  componentDidMount() {

  };

  render() {
    const {sale,price,time,data} = this.props;
    const {} = this.state;

    return (
      <View className='tuan-view mdui-grid-tile-actions mdui-color-red-400 mdui-grid-tile-actions-gradient' style='position:relative;'>
        <View className='mdui-grid-tile-text'>
          <View className='mdui-grid-tile-title'>团价</View>
          <View className='mdui-grid-tile-subtitle mdui-p-t-1' style='display:block'>
            <View className='mdui-float-left' style='padding-top:5px; ' >￥</View>
            {/*<View className='mdui-float-left' style='font-size:20px;'>{sale}</View>*/}
            <Editor input className='tuan-view-sale' data={data} key='sale'>{data.sale}</Editor>
            <View className='mdui-float-left' style='padding-top:4px; ' >&nbsp;/￥</View>
            <Editor input className='tuan-view-price' data={data} key='price'>{data.price}</Editor>
            {/*<View style='padding-top:5px; opacity:0.9' >&nbsp;{`/￥${price}`}</View>*/}
          </View>
        </View>
        <View ></View>
        <View className='mdui-grid-tile-buttons'>
          <View className='mdui-grid-tile-title'>结束时间</View>
          <View className='mdui-grid-tile-subtitle mdui-p-t-1' style='font-size:15px'>{time}</View>
        </View>
      </View>
    )
  }
}
export default Tuan
