import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Input} from '@tarojs/components';
import './index.scss'
import jump from '@utils/jump'

export default class InfoBase extends Component {
  static defaultProps = {
    data: {}
  }

  jumpTo(link){
    jump({url:link});
  }

  onAddTagBtnClick = ()=>{
    const { data } = this.props
    const { tagList = [] } = data
    tagList.push({
      "id": 128129077,
      "tagName": "",
      "type": 2,
      "canNotJumpFlag": false
    })
    this.setState({})
  }
  onDelTagBtnClick = (index)=>{
    const { data } = this.props
    const { tagList = [] } = data
    tagList.length>0 && tagList.splice(index,1)
    this.setState({})
  }
  render () {
    const { data } = this.props
    const {tagList = []} = data

    return (
      <View className='item-info-base'>
        <View className='item-info-base__header'>
          {/*<View className='item-info-base__header-wrap'>*/}
          {/*  */}
          {/*</View>*/}
          {/*<Text className='item-info-base__header-name'>{data.name}</Text>*/}
          {/*<Text className='item-info-base__header-desc'>{data.simpleDesc}</Text>*/}
          <Input className='item-info-base__header-name' value={data.title} placeholder='点击输入标题' onInput={(e)=>{data.title=e.detail.value}}></Input>
          <Input className='item-info-base__header-desc' value={data.content} placeholder='点击输入副标题' onInput={(e)=>{data.content=e.detail.value}}></Input>
          {!!tagList.length &&
          <View className='item-info-base__tag'>
            <View className='add-btn' onClick={this.onAddTagBtnClick.bind(this)}></View>
            {tagList.map(item => (
              <View key={item.id} className='item-info-base__tag-item'>
                <Input className='item-info-base__tag-item-txt' value={item.tagName} placeholder='tag' onInput={(e)=>{item.tagName=e.detail.value}}></Input>
                {/*<Image className='item-info-base__tag-item-img' src={rightArrow} />*/}
                <View className='remove-btn' onClick={this.onDelTagBtnClick.bind(this)}></View>
              </View>
            ))}
          </View>
          }
        </View>
      </View>
    )
  }
}
