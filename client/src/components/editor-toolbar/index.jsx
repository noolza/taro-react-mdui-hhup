import React, { Component } from 'react'
import Taro,{getCurrentInstance} from '@tarojs/taro'
import { View, Textarea, Button,Picker } from '@tarojs/components';
import empty from '@assets/images/empty.jpg'
import Server from "../../utils/server";
import {IMG_TYPE} from "../../constants";
import * as request from "../../utils/request";
import classNames from 'classnames';
import './index.scss'


const Config={
  move:'chevron_left,chevron_right',
  remove:'clear',
  add:'add',
  link:'link',
  image:'image',
  text:'mode_edit',
  save:'save',
  time:'access_time',
}
class Editor extends Component {

  icons=[]
  state = {
    icons:[],
    dateSel:'点击选择时间',
    inputSize:null
  }

  componentDidMount(){

  }

  updateInputSize(){
    const {page} = getCurrentInstance()
    const query = Taro.createSelectorQuery().in(page);
    query.select('#editor-input').boundingClientRect((res) => {
      this.setState({inputSize:{w:res.width,h:res.height}})
    }).exec()
  }

  componentDidMount(){
    var icons = [];
    for(var k in Config){
      if(this.props[k]){
        icons = icons.concat(Config[k].split(','))
      }
    }
    this.icons = icons;
    this.setState({icons})
  }

  UNSAFE_componentWillReceiveProps(nextProps,nextContext){
    // const {icons} = this.state;
    // const keys = Object.keys(Config);
    // console.log(nextProps,nextContext)
    // var icons = [];
    // for(var k in Config){
    //   if(nextProps[k]){
    //     icons = icons.concat(Config[k].split(','))
    //   }
    // }
    // if(this.state.icons.join(',')!=icons.join(','))
    //   this.setState({icons})

  }

  handleClick(act,idx,e) {
    e.stopPropagation();
    const {data,key,onChanged} = this.props;
    const self = this;
    if(act == 'image'){
      Taro.eventCenter.trigger('EVT_SHOW_IMAGEPICKER',(files,url)=>{
        // const {data,key,onChanged} = this.props;
        var dat = self.props.data;
        var k = self.props.key;
        var urls=[];
        if(files.length>0){
          files.map(f=>{
            urls.push(f['url'])
          })
        } else if(url){
          urls=[url]
        }
        var url = files.length>0?files[0]['url']:url;
        urls.map((u,idx)=>{
          if(typeof dat[k] == 'string'){
            dat.splice(k+idx,1,u)
          } else {
            dat.splice(k+idx,1,{img:u})
          }
        })
        if(url){
          self.setState({})
          self.props.onChanged&&self.props.onChanged(dat,key)
        }
      })
      return;
    } else if(act=='mode_edit'){
      Taro.eventCenter.trigger('EVT_SHOW_INPUT',(value)=>{
        var dat = this.props.data;
        var k = this.props.key;
        dat[k] = value
        this.setState({})
        this.props.onChanged&&this.props.onChanged(dat)
      },data[key])
      return;
    } else if(act=='clear'){
      data.splice(key,1)
    } else if(act=='chevron_left'){
      this.moveTo(-1)
    } else if(act=='chevron_right'){
      this.moveTo(1)
    } else if(act=='add'){
      var dat;
      if(typeof data[key] == 'string'){
        dat = data[key]
        if(dat.indexOf('://tmp')>=0||dat.indexOf('http:')>=0||dat.indexOf('cloud://')>=0){
          dat = empty
        } else dat = ''
      } else {
        dat = Object.assign({},data[key]);
        for(var k in dat){
          if(typeof dat[k] == 'string'){
            const str = dat[k];
            if(str.indexOf('://tmp')>=0||str.indexOf('http:')>=0||str.indexOf('cloud://')>=0){
              dat[k] = empty
            } else dat[k] = ''
          }
        }
      }
      data.push(dat);
    } else if(act == 'save') {
      if(key=='post'){
        this.uploadPost()
      } else if(key=='home'){
        this.uploadHome()
      }
    }
    this.setState({})
    this.props.onChanged&&this.props.onChanged(data)
  };

  moveTo(dir) {
    const {data,key} = this.props;
    const idx = key;
    if(idx + dir < 0 || idx + dir >= data.length) {
      return;
    }
    var curEle      = data[idx];
    var toEle       = data[idx + dir];
    data[idx]       = toEle;
    data[idx + dir] = curEle;
  }

  async uploadPost() {
    const {data} = this.props;
    const {detail, banner=[]} = data;
    console.log(data);
    Taro.setStorageSync( 'Editor_Item_Config', data);
    // itemInfo.steps = itemInfo.step;
    for(var i = 0; i < banner.length; i++) {
      var b = banner[i];
      Taro.showToast({title: `banner(${i + 1}/${banner.length})`, icon: 'loading', duration: 10000});
      if(b.img && b.img.startsWith('http://tmp/')) {
        var res = await Server.uploadImage(b.img,IMG_TYPE.POST);
        if(!res.error) {
          banner[i] = res.path;
        } else {
          Taro.showToast({title: 'banner图片上传失败:' + i, icon: 'fail'});
          return;
        }
      }
    }

    for(var i = 0; i < detail.length; i++) {
      var url = detail[i];
      Taro.showToast({title: `详情(${i + 1}/${detail.length})`, icon: 'loading', duration: 10000});
      if(url && url.startsWith('http://tmp/')) {
        var res = await Server.uploadImage(url,IMG_TYPE.POST);
        if(!res.error) {
          detail[i] = res.path;
        } else {
          console.log('step图片上传失败:',res.error);
          Taro.showToast({title: 'step图片上传失败:' + i, icon: 'fail'});
          return;
        }
      }
    }

    Taro.showToast({title: '开始保存数据', icon: 'loading', mask: true, duration: 100000});
    request.CloudFunction('post','publish',data).then(res=>{
      console.log(res);
      if(res.code==0) {
        if(!data._id){
          data._id = res.data._id;
        }
        Taro.showToast({title: '保存成功', icon: 'success', mask: true});
      } else {
        Taro.showToast({title: '保存失败', icon: 'fail', mask: true});
      }
    })
  }

  async uploadHome(){
    const {data} = this.props;
    const {banner=[]} = data;
    for(var i = 0; i < banner.length; i++) {
      var url = banner[i]['img'];
      Taro.showToast({title: `banner(${i + 1}/${banner.length})`, icon: 'loading', duration: 10000});
      if(url && url.startsWith('http://tmp/')) {
        var res = await Server.uploadImage(url,IMG_TYPE.BANNER);
        if(!res.error) {
          banner[i]['img'] = res.path;
        } else {
          Taro.showToast({title: 'banner图片上传失败:' + i, icon: 'fail'});
          return;
        }
      }
    }
    Taro.showToast({title: '开始保存数据', icon: 'loading', mask: true, duration: 100000});
    request.CloudFunction('home','publish',data).then(res=>{
      console.log(res);
      if(res.code==0) {
        if(!data._id){

          data._id = res.data._id;
        }
        Taro.showToast({title: '保存成功', icon: 'success', mask: true});
      } else {
        Taro.showToast({title: '保存失败', icon: 'fail', mask: true});
      }
    })

  }
  onDateChange = e => {
    const{data,key}=this.props
    data[key] = e.detail.value;
    this.setState({
      dateSel: e.detail.value
    })
    this.props.onChanged&&this.props.onChanged(data)
  }

  handleInput(e){
    const {data,key} = this.props;
    data[key] = e.detail.value;
    this.setState({inputValue: e.detail.value})
    // onChanged && onChanged(key,e.detail.value)
  }

  handleFocus(){
    const {data,key} = this.props;
    this.setState({focus:true,inputValue:data[key]})
  }

  handleBlur(){
    const {data,key} = this.props;
    data[key] = this.state.inputValue
    this.setState({focus:false,inputValue:''})
  }

  handleConfirm(){
    const {data,key} = this.props;
    data[key] = this.state.inputValue
  }

  render() {
    const {float,title='',time,children,input,className} = this.props;
    const {inputValue,focus,icons} = this.state
    // console.log(icons)
    const cls = float ? `mdui-float-${float}`:'mdui-toolbar';
    const sty = float ? '' : 'position:absolute;bottom:0px;z-index:1000';
    const enable = true;

    const tools =()=>enable&&icons.length ? <View className={cls} style={sty}>
      <View className='mdui-toolbar-spacer'></View>
      {
        time?
          <Picker mode='date' onChange={this.onDateChange} style='flex:1' value='2020-11-13'>
            <View className='picker'>
              {title} {this.state.dateSel}
            </View>
          </Picker> :
          this.icons.map((icon,idx)=>{
            return (<Button key={idx} href='javascript:;' className='mdui-btn mdui-btn-icon mdui-btn-dense' onClick={this.handleClick.bind(this,icon,idx)}><View style='color:gray' className='mdui-icon material-icons'>{icon}</View></Button>)
          })
      }
      {children}
    </View>:null

    return (
      input?
        <View className={classNames('editor-view',className)}>
          {children&&<View style={`visibility:${focus?'hidden':'visible'}`}>{children}</View>}
          {enable&&<Textarea
            className={classNames('editor-view-input',{'editor-view-input-focus':focus},className)}
            value={inputValue}
            onFocus={this.handleFocus.bind(this)}
            onInput={this.handleInput.bind(this)}
            onConfirm={this.handleConfirm.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          />}
        </View>:
        tools()
    )
  }
}

export default Editor
