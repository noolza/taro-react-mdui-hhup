import Taro from '@tarojs/taro';
import React, {Component} from 'react'

import {View,Image, ScrollView} from '@tarojs/components';
import './index.scss';
import {emojis} from './weibo-emojis';

class InputEmoji extends Component {
  static defaultProps = {
    prop: [],
    boardHeight:0
  };

  config = {
    navigationBarTitleText: 'input-emoji'
  };

  UNSAFE_componentWillMount() {

  };

  onTap(val) {
    // this.$emit('emoji', val);
    this.props.onTap && this.props.onTap(val);
  }
  onDel() {
    // this.$emit('del');
    this.props.onDel && this.props.onDel();
  }
  render() {
    // const {emojis} = this.state;
    const keys = Object.keys(emojis);
    const {height,hide} = this.props;

    return (
      <View class='input-emoji' style={`height:${height}px`} hidden={hide}>
        <ScrollView className='scroll-view' scrollY style={`height:${height}px`}>
          <View class='icons'>
            {keys.map((k,idx) => {
              const emj = emojis[k]
              return(<View class='img' key={idx} onClick={this.onTap.bind(this, emj.value)}>
                <Image class='icon-img' src={emj.url} lazyLoad/>
              </View>)
            })}
          </View>
          <View style='height:148px;'></View>
        </ScrollView>
        <View class='btn-box'>
          <View class='btn-del' onClick={this.onDel.bind(this)}>
            <View class='icon icon-remove'/>
          </View>
        </View>
      </View>
    );
  }
}

export default InputEmoji;
