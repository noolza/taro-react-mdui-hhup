/* eslint-disable react/jsx-tag-spacing */
import Taro,{ getCurrentInstance } from '@tarojs/taro';
import React, { Component } from 'react'
import { View, Image, Button, Text,Picker } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './index.scss';
import Gallery from "../../components/gallery";
import NavBar from "../../components/nav-bar";
import {MdAccordion, MdListItem,MdTabs} from "../../components/mdui";
import Editor from "../../components/editor-toolbar";
import GlobalData, {Keys} from '@constants/global-data'
import ImageSelector from "../../components/image-selector";
import TextEditor from "../../components/text-editor";
import {IMG_TYPE} from "../../constants";
import Server from "../../utils/server";
import TimePicker from "../../components/time-picker";
import Tuan from "./tuan";
import EditorView from "../../components/editor-view";

@connect(({item}) => ({...item}))
class Item extends Component {
  static defaultProps ={
    prop:[]
  }
  state = {
    loaded:false,
    detailLength:5,
    status:'loading',
    current: {},
    dateSel:'',
    delay:-2,
    timerStr:''
  }

  onOK = ({ current }) => {
    this.setState({
      current
    });
  };
  itemData={};
  componentWillMount(options){
    console.log(options)
    const { router:{params} } = getCurrentInstance()
    console.log(params.itemId)
    if(params.itemId!='-1') {
      this.props.dispatch({type:'item/getItem',_id:params.itemId}).then(res=>{

        this.itemData = res
        this.getDelay()
        this.timeout = setInterval(this.timer.bind(this),1000)
        this.setState({loaded:true, status:res?'loaded':'noMore'})
        // this._resetScroll();
      })
    } else {
      this.itemData = GlobalData.get(Keys.KEY_NEW_POST)
      // this.getDelay()
      // this.timeout = setInterval(this.timer.bind(this),1000)
      this.setState({loaded:true, status:'loaded'})
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  };

  handleBack() {
    // Taro.navigateTo({
    //   url: `/pages/home/index`
    // })
    Taro.switchTab({url:'/pages/home/index'})
  };

  timer(){
    var delay = this.state.delay;
    var timerStr=''
    if(delay==-1) {

      timerStr = '即将开团'
    } else if(delay == 0){
      timerStr = '团购结束'
    } if(delay>0){
      delay -=1000;
      var d = Math.floor(delay/1000/60/60/24);
      var h = Math.floor(delay/1000/60/60%24);
      var m = Math.floor(delay/1000/60%60);
      var s = Math.floor(delay/1000%60);

      h = h<10?'0'+h:h
      m = m<10?'0'+m:m
      s = s<10?'0'+s:s
      timerStr = d>0?`${d} 天 ${h}:${m}:${s}`:`${h}:${m}:${s}`
    }
    this.setState({delay, timerStr})
  }

  getDelay(key){
    if(!this.itemData.startTime||!this.itemData.endTime) return;

    var start = new Date(this.itemData['startTime']).getTime();
    const end = new Date(this.itemData['endTime']).getTime();
    const now = Date.now();
    var delay = -1
    if(now>start){
      start = Date.now();
      delay = Math.max(end - start,0);
    }

    this.setState({delay})
    // const h = d.getHours();
    // const m = d.getMinutes();
    // const s = d.getSeconds();
    //
    // console.log(d.getHours())
  }

  render() {
    const theme = '';
    const themoColor = '';
    const img = 'https://img.alicdn.com/imgextra/i2/3441177969/O1CN01hXgZc928jqqVBI9hR_!!3441177969.jpg';
    const img2 = 'https://img.alicdn.com/imgextra/i1/3441177969/O1CN01CI9btv28jqqXV5YDS_!!3441177969.jpg';
    const img3 = 'https://img.alicdn.com/imgextra/i2/3441177969/O1CN01KnyrqM28jqsOwZhqb_!!3441177969.jpg';
    if(!this.state.loaded) return null;
    const {banner,title,subTitle,author,content,price='',sale='',detail=[]} = this.itemData

    return (
      <View className='mdui-theme-primary-red mdui-theme-accent-light-green mdui-color-theme-50 '>
        <NavBar icons={['navigate_before']} onClickAction={this.handleBack}><Editor float='left' save data={this.itemData} key='post' onChanged={()=>{this.setState({})}} /></NavBar>
        <View className='mdui-card mdui-shadow-0'>
          <View className='mdui-card-media' >
            <View className='mdui-grid-tile'>
              <Gallery list={banner} autoplay={false} />
              <Tuan time={this.state.timerStr} data={this.itemData}/>
            </View>
            <View style='display:flex'>
              <Editor float='left' time data={this.itemData} key='startTime' title='开团时间:' onChanged={this.getDelay.bind(this,'startTime')}/>
              <Editor float='right' time data={this.itemData} key='endTime' title='结束时间:' onChanged={this.getDelay.bind(this,'endTime')}/>
            </View>
            <View className='mdui-card-primary'>
              <Editor input className='mdui-card-primary-title mdui-text-color-black' data={this.itemData} key='title'>{title}</Editor>
              <Editor input className='mdui-card-primary-subtitle mdui-text-color-black' data={this.itemData} key='subTitle'>{subTitle}</Editor>
              {/*<View className='mdui-card-primary-title mdui-text-color-black'>{title}<Editor float='right' text data={this.itemData} key={title} onChanged={()=>{this.setState({})}}/></View>*/}
              {/*<View className='mdui-card-primary-subtitle mdui-text-color-black'>{subTitle}<Editor float='right' text data={this.itemData} key={subTitle} onChanged={()=>{this.setState({})}}/></View>*/}
            </View>
          </View>
          {/*<View className='mdui-card-content'>{content}<Editor float='right' text data={this.itemData} key={content} onChanged={()=>{this.setState({})}}/></View>*/}
          <Editor input className='mdui-card-content' data={this.itemData} key='content'>{content}</Editor>
          {/*<View className='mdui-card-actions mdui-typo'>*/}
          {/*  <View className='mdui-typo-display-1 mdui-text-color-theme'>{`￥${sale}/`}</View>*/}
          {/*  <View className='mdui-typo-title-opacity mdui-text-color-black-secondary mdui-text-color-theme-300' style='padding-top:10px;fontStyle:italic'>{`￥${price}`}</View>*/}
          {/*  <Button className='mdui-btn mdui-color-theme-100 mdui-float-right' style='margin-left:auto'>团购</Button>*/}
          {/*  <Editor float='right' text data={this.itemData} key='sale' onChanged={()=>{this.setState({})}}/>*/}
          {/*  <Editor float='right' text data={this.itemData} key='price' onChanged={()=>{this.setState({})}}/>*/}
          {/*</View>*/}
        </View>
        <View className='mdui-divider-dark' />
        {/*<TimePicker current={Date.now()} placeholder='开团时间' initValue='2016/01/01 17:22:37' wrap-class='my-class'  select-item-class='mySelector' onOK={this.onOK.bind(this)} />*/}

        {/*<View className='mdui-card-primary'>*/}
        {/*  <View className='mdui-typo-title mdui-text-color-black'>活动详情</View>*/}
        {/*</View>*/}
        {/*<View className='mdui-Viewider-dark' />*/}
        {/*<Image src={img3} mode='widthFix' style='width:100%' />*/}

        <MdTabs tabList={['活动详情','往期团购']}>
          <View className='mdui-tab-panel'>
            {
              detail.map((pic,idx)=>{
                return(
                  <View key={idx} style='position:relative;display:block'>
                    <Image src={pic} mode='widthFix' style='width:100%' />
                    <Editor move remove add image data={detail} key={idx} onChanged={(d)=>{this.itemData.detail=d;this.setState({})}}/>
                  </View>
                )
              })
            }
          </View>
          <View className='mdui-tab-panel'>
            {/*<Image src={img3} mode='widthFix' style='width:100%' />*/}
          </View>
        </MdTabs>
        <ImageSelector/>
        <TextEditor/>
      </View>
    )
  }
}
export default Item
