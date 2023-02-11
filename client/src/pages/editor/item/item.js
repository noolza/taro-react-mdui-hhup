import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, ScrollView, Button, Text, Picker} from '@tarojs/components';
// import { Popup, Loading } from '@components'
import { connect } from '@tarojs/redux'
// import * as actions from '@actions/item'
// import { dispatchAdd } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Gallery from './gallery'
import InfoParam from './info-param'
import Detail from './detail'
import Footer from './footer'
import './item.scss'
import Server from "@utils/server";
import NewItem from '../assets/newItem';
import InfoBase from "./info-base";
import ImageSelector from "../../../components/image-selector";
import CateSelector from "../../../components/cate-selector";
import {IMG_TYPE} from "../../../constants";

@connect(({item,editor}) => ({...item,...editor}))
class ItemEditor extends Component {
  static defaultProps = {
    itemInfo: {},
  }
  config = {
    navigationBarTitleText: '商品详情',
    "disableScroll":true
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
    this.itemId = this.$router.params.itemId;
    this.EditItem = JSON.parse(JSON.stringify(NewItem));
  }

  componentDidMount() {
    console.log(this.itemId)
    if(this.itemId){
      this.props.dispatch({type:'item/getItem',_id:this.itemId}).then(()=>{
        this.EditItem = this.props.itemInfo;
        this.setState({ loaded: true })
      })
    } else {
      this.setState({ loaded: true })
    }
  }

  onBack(){
    const pages = Taro.getCurrentPages();
    if (pages.length >= 2) {
      Taro.navigateBack({
        delta: this.props.delta||1
      });
    } else {
      Taro.switchTab({url:'/pages/home/index'})
    }
  }

  onClickHistory() {
    Taro.getStorage({key: 'Editor_Item_Config'}).then(cfg => {
      if(cfg && cfg.data) {
        cfg.data._id = this.EditItem._id;
        this.EditItem = cfg.data;
        console.log(this.EditItem)
      }
      this.setState({loaded: true});
    });
  }

  async onSave(classify) {
    var itemInfo = this.EditItem;
    const {steps, banner=[]} = itemInfo;
    console.log(itemInfo);
    Taro.setStorageSync( 'Editor_Item_Config', itemInfo);
    // itemInfo.steps = itemInfo.step;
    for(var i = 0; i < banner.length; i++) {
      var url = banner[i];
      Taro.showToast({title: `banner(${i + 1}/${banner.length})`, icon: 'loading', duration: 10000});
      if(url && url.startsWith('http://tmp/')) {
        var res = await Server.uploadImage(url,IMG_TYPE.POST);
        if(!res.error) {
          banner[i] = res.path;
        } else {
          Taro.showToast({title: 'banner图片上传失败:' + i, icon: 'fail'});
          return;
        }
      }
    }

    for(var i = 0; i < steps.length; i++) {
      var url = steps[i]['img'];
      Taro.showToast({title: `详情(${i + 1}/${steps.length})`, icon: 'loading', duration: 10000});
      if(url && url.startsWith('http://tmp/')) {
        var res = await Server.uploadImage(url,IMG_TYPE.POST);
        if(!res.error) {
          steps[i]['img'] = res.path;
        } else {
          console.log('step图片上传失败:',res.error);
          Taro.showToast({title: 'step图片上传失败:' + i, icon: 'fail'});
          return;
        }
      }
    }

    Taro.showToast({title: '开始保存数据', icon: 'loading', mask: true, duration: 100000});
    this.props.dispatch({type:'item/publish',data:itemInfo}).then(res=>{
      console.log(res);
      if(res.code==0) {
        if(!itemInfo._id){
          itemInfo._id = res.data._id;
        }
        Taro.showToast({title: '保存成功', icon: 'success', mask: true});
      } else {
        Taro.showToast({title: '保存失败', icon: 'fail', mask: true});
      }
    })
  }

  render () {
    var itemInfo = this.EditItem;
    console.log(itemInfo)
    const { steps, banner } = itemInfo;
    const {category} = this.props;

    const height = getWindowHeight(false)

    if (!this.state.loaded) {
      return <View />
    }

    return (
      <View className='item'>
        <ScrollView
          scrollY
          className='item__wrap'
          style={`height:${height}px`}
        >
          <Gallery list={banner} itemInfo={itemInfo}/>
          <InfoBase data={itemInfo} />
          <InfoParam list={itemInfo.attrList} />
          <Detail itemDetail={steps} />
        </ScrollView>

        <View className='item__footer'>
          <Footer onSave={this.onSave.bind(this)} onHistory={this.onClickHistory.bind(this)} itemInfo={itemInfo} showCategory={()=>{this.setState({showCate:true})}} />
        </View>

        <View onClick={this.onBack.bind(this)} className='fab-btn'>
          <Text className='eicon eicon-move-left'></Text>
        </View>
        <ImageSelector isOpened={false}/>
        <CateSelector isOpened={this.state.showCate} category={category} itemCategory={itemInfo.category} onClose={()=>{this.setState({showCate:false})}}/>
      </View>
    )
  }
}

export default ItemEditor
