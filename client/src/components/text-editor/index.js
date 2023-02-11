/**
 * Created by lhq on 2020/7/9 0009.
 */

import Taro from '@tarojs/taro';
import React, {Component} from 'react'
import {View, Button, Input} from '@tarojs/components';
import classNames from 'classnames'
// import {AtImagePicker, AtModal, AtModalAction, AtModalContent} from "taro-ui";
// import './index.scss';

export default class TextEditor extends Component {
  static defaultProps = {
    files:'',
    show:false
  };

  constructor(props) {
    super(props);
    this.state = {
      value:'',
      show:false
    };
    Taro.eventCenter.on('EVT_SHOW_INPUT',(callback,text)=>{
      this.setState({show:true,value:text});
      this.callback = callback;
      console.log(text)
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.state.show!=nextProps.isOpened){
      this.setState({show:nextProps.isOpened})
    }
  }

  handleClose = () => {
    // Taro.eventCenter.trigger('EVT_CLOSE_IMAGEPICKER',this.state.files)
    console.log('model closed')
    this.props.onClose && this.props.onClose();
    this.callback = null;
    this.setState({value:'',show:false})
  };

  async handleComfirm(){
    const {value} = this.state;

    if(this.callback)
      this.callback(value);
    this.callback = null;
    this.setState({value:'',show:false})
  }

  handleInput(e){
    console.log(e.detail.value);
    this.setState({value:e.detail.value})
  }

  render() {
    const { value,show } = this.state
    // console.log(this.state.show);
    const cls = classNames('mdui-dialog',{'mdui-dialog-open':show})
    const msk = classNames('mdui-dialog-mask','mdui-mask',{'mdui-mask-show':show})
    return (
      <View className={msk}>
      <View className={cls} >
        <View className='mdui-dialog-title'>编辑</View>
        <View className='mdui-container-fluid'>
          <Input className='mdui-textfield-input' placeholder='输入' value={value} onConfirm={this.handleInput.bind(this)} onInput={this.handleInput.bind(this)} />
        </View>
        <View className='mdui-dialog-actions'>
          <Button className='mdui-btn mdui-ripple' onClick={this.handleClose.bind(this)}>取消</Button>
          <Button className='mdui-btn mdui-ripple' onClick={this.handleComfirm.bind(this)}>确定</Button>
        </View>
      </View>
      </View>
    );
  }
}

