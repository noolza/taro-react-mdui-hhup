import Taro from '@tarojs/taro'
import React, { Component } from 'react'

import {View, Text, Image, Button, Swiper, SwiperItem} from '@tarojs/components';
// import { Tag } from '@components'
// import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'
// import Server from "@utils/server";
import NewItem from "../assets/newItem"

// import { AtIcon} from "taro-ui";
import {fixNum} from "../../../utils/utils";
import {parseEmoji} from "../../../components/input-emoji/weibo-emojis";
// import classNames from 'classnames'
// import FadeSwiper from "@components/fade_swiper";

export default class Items extends Component {
  static defaultProps = {
    list: [],
    currentPage:0
  }
  removeList = []
  newItem={}
  componentDidShow() {
    // this.newItem = NewItem
    // this.newItem._id='';
    // this.newItem.banner = [''];
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    const { list,scrollData} = nextProps;
  }

  handleSwiperAnim(idx,e){
    const { list } = this.props;
    var item = list[idx];
    item.currentIdx = e.detail.current;
    this.setState({})
  }

  jumpTo = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    })
  }

  onClickSaveAll(id) {
    if(this.removeList.length>0){
      this.props.onSave(this.removeList);
    }
  }

  handleRemove(idx) {
    // const { list=[]} = this.props
    this.removeList.push(this.props.list[idx]['_id']);
    this.props.list.splice(idx,1);
    console.log(idx)

    this.setState({})
  }

  handleClick(id,e,d) {
    console.log(id)
    Taro.navigateTo({
      url: `/pages/editor/item/item?itemId=${id}`
    })
  }

  render () {
    const { list=[]} = this.props
    var newItem = [NewItem];
    var newList = newItem.concat(list);
    return (
      <View className='home-popular'>
        <View className='home-popular__title'>
          <Text className='home-popular__title-txt'>人气推荐</Text>
          <Text className='eicon eicon-upload' onClick={this.onClickSaveAll.bind(this)}></Text>
        </View>
        <View className='home-popular__list'>
          {newList.map((item,idx) => {
            const { _id='',title,primary, banner=[],hasLike,comment} = item;
            const commObj = comment?parseEmoji(comment.commentText):[];
            console.log(commObj)
            const avatar = comment?comment.avatar:'';
            return (
              <View
                key={idx}
                className='home-popular__list-item__1'
              >
                <Image src={primary||banner[0]||require('../assets/empty.jpg')} mode='widthFix' onClick={this.handleClick.bind(this,_id)} />
                <View className='at-row home-popular__list-item__1-menu' >
                  <View className='at-col'></View>
                  <Text className='icon icon-chat menu-icon' onClick={this.jumpTo.bind(this,_id,true)}/>
                  <Text className='menu-text'>{fixNum(item.commentsCount||0)}</Text>
                  <Text  className='icon icon-heart menu-icon' style={`color:${hasLike?'#ff8d68':'#000'}`}/>
                  <Text className='menu-text'>{fixNum(item.thumbsCount||0)}</Text>
                </View>

                <View className='home-popular__list-item__1-info'>
                  <Text className='home-popular__list-item__1-name' numberOfLines={2}>
                    {title}
                  </Text>
                  {comment&&
                  <View className='home-popular-comment'>
                    <View className='home-popular-comment-head'>
                      <Image
                        className='home-popular-comment-avatar'
                        src={avatar}
                      />
                      <View className='home-popular-comment-txt' numberOfLines={2}>
                        {commObj.map((obj,i)=>{
                          return (
                            obj.type==0
                              ?<Text key={i}>{obj.value}</Text>
                              :<Image key={i} className='home-popular-comment-face' src={obj.src} mode='widthFix'></Image>
                          )
                        })}
                      </View>
                    </View>
                    <Text className='home-popular-comment-view' onClick={this.jumpTo.bind(this,_id,true)}>{`查看全部 (${item.commentsCount})`}</Text>
                  </View>
                  }
                </View>
                {idx>0&&<View className='home-popular__list-item__1-float-tr'>
                  <Text className='eicon eicon-del' onClick={this.handleRemove.bind(this, idx-1)}/>
                </View>}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
