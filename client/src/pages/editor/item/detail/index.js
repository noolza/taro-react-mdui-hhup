import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Image, Text, Button, Textarea} from '@tarojs/components';
import './index.scss'
// import {AtAccordion, AtTextarea,AtSwitch} from "taro-ui";
// import FS from "../../../../utils/fs";
// import ButtonItem from "../../../../components/button";
// import __ from 'underscore'

export default class Detail extends Component {
  static defaultProps = {
    itemDetail: [{}],
  }
  state = {
    open:false,
    imageValue:'',
    descValue:''
    // usingComponents: {
    //   wemark:"../../../wemark/wemark",
    // }
  }
  // componentWillReceiveProps(nextProps, nextContext) {
  //   var imgs = _.pluck(nextProps.itemDetail,'img');
  //   var desc = _.pluck(nextProps.itemDetail,'desc');
  //   this.setState({images:imgs,contents:desc});
  // }

  componentDidMount () {
    //h5
    // const el = document.getElementById('html1')
    // el.innerHTML = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`
    // this.setState({})
  }
  handleRemoveImg = (index) => {
    // this.chooseFile()
    // const list = this.state.imgList
    const {itemDetail} = this.props;
    if(itemDetail.length == 0) return;

    if(index == -1){
      itemDetail.splice(0,itemDetail.length);
      this.setState({})
      return;
    }
    // if (itemDetail.length < 2) {
    //   Taro.showToast({
    //     title: '删除失败，最少上传一张照片',
    //     icon: 'none'
    //   });
    //   return;
    // }
    itemDetail.splice(index, 1);
    this.setState({});
  };

  moveTo(idx,dir){
    const {itemDetail} = this.props;
    if(idx+dir<0 || idx+dir>=itemDetail.length){
      return;
    }
    var curEle = itemDetail[idx];
    var toEle = itemDetail[idx+dir];
    itemDetail[idx] = toEle
    itemDetail[idx+dir] = curEle
    this.setState({});
  }

  chooseFile = (index) => {
    const {itemDetail} = this.props;
    const isLongImg = typeof itemDetail[0] == 'string';
    var step = itemDetail[index]||{};
    var img = isLongImg ? step : step.img;
    Taro.eventCenter.trigger('EVT_SHOW_IMAGEPICKER', (files,url) => {
      var _url = files.length>0?files[0]['url']:url;
      if(!_url) return;

      var rm = index == -1 ? 0 : 1;
      var idx = index == -1? itemDetail.length:index;
      var arg = [idx,rm];
      if(isLongImg){
        step = url;
      } else {
        step.img = _url;
      }
      arg.push(step);
      Array.prototype.splice.apply(itemDetail,arg);
      if(files.length>1){
        for(var i=1;i<files.length;i++){
          index++;
          var stp = itemDetail[index]||{};
          if(isLongImg){
            stp = files[i]['url']
          } else {
            stp['img'] = files[i]['url'];
          }
          itemDetail[index] = stp;
        }
      }
      console.log(arg,itemDetail)
      this.setState({});
    }, img);
  };

  handleAccordion(value){
    this.setState({open:value})
  }

  handleFormat(){
    const {imageValue,descValue} = this.state;
    const {itemDetail} = this.props;
    if(typeof itemDetail[0] == 'string'){
      itemDetail.push.apply(itemDetail,imageValue.split('\n'));
      this.setState({});
      return;
    }
    var _i=0,lastImg=-1,lastDesc=-1;
    while(itemDetail[_i]){
      if(lastImg<0&&itemDetail[_i]['img']==undefined){
        lastImg = _i;
      }
      if(lastDesc<0&&itemDetail[_i]['desc']==undefined){
        lastDesc = _i;
      }
      if(lastImg>=0&&lastDesc>=0)
        break
      _i++;
    }
    if(lastImg == -1){
      lastImg = itemDetail.length;
    }
    if(lastDesc == -1){
      lastDesc = itemDetail.length;
    }
    if(descValue) {
      var desc           = descValue.split('\n');
      for(var i = 0; i < desc.length; i++) {
        var detail     = itemDetail[lastDesc+i] || {};
        var spl = desc[i].split('*');
        detail['desc'] = spl[0];
        detail['note'] = spl[1]||'';
        itemDetail[lastDesc+i]  = detail;
      }
    }
    if(imageValue) {
      var imgs = imageValue.split('\n');
      for(var i = 0; i < imgs.length; i++) {
        var detail    = itemDetail[lastImg+i] || {};
        detail['img'] = imgs[i];
        itemDetail[lastImg+i] = detail;
      }
    }

    this.setState({});
  }

  handleSwitchMode(){
    const {itemDetail} = this.props;
    if(typeof itemDetail[0] == 'string'){
      itemDetail.length=0;
      itemDetail[0] = {}
    } else {
      itemDetail.length = 0;
      itemDetail[0] = '';
    }
    this.setState({});
  }

  render () {
    const {itemDetail} = this.props;
    const isLongImg = typeof itemDetail[0] == "string";

    return (
      <View className='item-detail'>
        <View className='item-detail'>
          <View className='item-detail-title'>操作步骤</View>
          <View className='item-detail__wrap-item-float-tr'>
            <Text className='eicon eicon-remove' onClick={this.handleRemoveImg.bind(this, -1)}/>
          </View>
          <AtAccordion
            open={this.state.open}
            onClick={e=>{this.setState({open:e})}}
            title='设置'
          >
            <AtSwitch border={false} title='长图模式' checked={isLongImg} onChange={this.handleSwitchMode.bind(this)} />
            {!isLongImg&&<AtTextarea
              customStyle='margin:5px;width:98%;white-space:nowrap;text-overflow:ellipsis;wrap:off'
              count={false}
              value={this.state.contentVaule}
              onChange={e => {this.setState({descValue:e})}}
              placeholder='输入文本用换行隔开'
              maxLength={9999}
            />}
            <AtTextarea
              customStyle='margin:5px;width:98%;white-space:nowrap;text-overflow:ellipsis;wrap:off'
              count={false}
              value={this.state.imageValue}
              onChange={e => {this.setState({imageValue:e})}}
              placeholder='输入图片链接多张图片用换行隔开'
              maxLength={9999}
            />
            <View style='display:flex;margin-bottom:10px;warp:off' >
              <Button size='mini' type='primary' text='确定' style='flex:auto;width:100px' onClick={this.handleFormat.bind(this)}>确定</Button>
            </View>
          </AtAccordion>
        </View>
        {itemDetail.map((item, index) => {
          const img = isLongImg ? item : item.img;
          return (
          <View className='item-detail-step' key={index}>
            {!isLongImg&&<View className='item-detail-title'>{'步骤'+(index+1)}</View>}
            <Image
              key={index}
              className='item-detail-step-img'
              src={img||require('../../assets/empty.jpg')}
              mode='widthFix'
              onClick={this.chooseFile.bind(this,index)}
            />
            {!isLongImg&&<Textarea className='item-detail-step-desc' value={item.desc} placeholder='描述' onInput={(e)=>{item.desc=e.detail.value}}></Textarea>}
            {!isLongImg&&<Textarea className='item-detail-step-note' value={item.note} placeholder='标注' onInput={(e)=>{item.note=e.detail.value}}></Textarea>}
            <View className='item-detail__wrap-item-float-tr'>
              <Text className='eicon eicon-del' onClick={this.handleRemoveImg.bind(this, index)}/>
              <Text className='eicon eicon-move-top' onClick={this.moveTo.bind(this, index, -1)}></Text>
              <Text className='eicon eicon-move-btm' onClick={this.moveTo.bind(this, index, 1)}></Text>
            </View>
          </View>
        )})}
        <View className='item-detail__flex-item' onClick={this.chooseFile.bind(this,-1)}>
          <View className='item-detail__choose-btn'>
            <View className='add-bar'></View>
            <View className='add-bar'></View>
          </View>
        </View>
      </View>
    )
  }
}
