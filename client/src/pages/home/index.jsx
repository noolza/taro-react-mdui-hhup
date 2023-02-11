/* eslint-disable react/jsx-tag-spacing */
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import {AppBar, MdNavbar, MdTabs, mdui, MdCard, MdFab} from '../../components/mdui';
import './index.scss';
import NavBar from "../../components/nav-bar";
import Gallery from "../../components/gallery";
import Editor from "../../components/editor-toolbar";
import empty from '@assets/images/empty.jpg'
import newItem from '@assets/data/post'
import GlobalData, {Keys} from '@constants/global-data'
import ImageSelector from "../../components/image-selector";

const headIcon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601062354839&di=38b43b33e7374305153871389933f023&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fd3c06f81e0924675b94f6ba954d99c71.jpg'

const IMG = 'https://img.alicdn.com/imgextra/i1/508370014/O1CN011ByS0HqtnwleXeg_!!508370014.jpg'
const IMG1 = 'https://img.alicdn.com/imgextra/i1/3979625482/O1CN017jtwkx1qMnqpSG1c0_!!3979625482.jpg'
const IMG2 = 'https://img.alicdn.com/imgextra/i1/1598692046/O1CN01HfNanh1Qz6w3w8Ecj_!!1598692046.jpg'

@connect(({home}) => ({...home}))
class Home extends Component {
  static defaultProps ={
    prop:[]
  }
  state = {
    current:1,
    pageSize:10,
    pageIndex:1,
  }

  componentWillMount() {
    const {pageSize,pageIndex} = this.state;
    const data = pageIndex==1 ? {pageSize,pageIndex} : null;

    this.props.dispatch({type:'home/getHomeInfo',data})
    newItem.detail=[empty]
    GlobalData.set(Keys.KEY_NEW_POST,newItem)
  };

  componentDidMount() {
    mdui.mutation('.home-page')
  };

  onPageScroll(e){
    mdui.onPageScroll(e);
  }

  handleChange(idx){
    // this.setState({current:idx})
  }

  handleGalleryClick(id){
    Taro.navigateTo({
      url: `/pages/item/index?itemId=${id}`
    })
  }
  handlePostClick(id){
    Taro.navigateTo({
      url: `/pages/item/index?itemId=${id}`
    })
  }
  render() {
    const {homeInfo:{banner,popular={}}} = this.props;
    const content = 'Buydeem/北鼎即热式饮水机家用速热小型台式迷你饮水器全自动S603'
    const paddingTop = Taro.systemInfo.customNavHeight
    const colorClass = ['mdui-color-green-300','mdui-color-red-300','mdui-color-red-50']
    const themes = ['light-green','red','red']
    const opacitys=['200','200','50']
    const opa = opacitys[this.state.current]
    const theme = themes[this.state.current]
    const color = colorClass[this.state.current]
    const newItem = GlobalData.get(Keys.KEY_NEW_POST);
    const primary = newItem.primary || newItem.banner[0]['img'] || empty;
    return (
      <View className={`home-page mdui-theme-primary-${theme} mdui-theme-accent-${theme} mdui-theme-layout-auto `} style={`padding-top:${paddingTop}px`}>
        <NavBar icons={['search']} search title='慧绘优品' className='mdui-color-theme-300'><Editor float='left' save data={this.props.homeInfo} key='home' onChanged={()=>{this.setState({})}} /></NavBar>
        <Gallery autoplay ppt={false} list={banner} anim={false} onChanged={this.handleChange.bind(this)} onClick={this.handleGalleryClick.bind(this)} maginLeft='10px' maginRight='10px'
          imgStyle=''
        />
        <MdTabs tabList={['当前团购','往期团购','即将开团']}>
          <View className='mdui-tab-panel'>
            <MdCard
              head={{iconInfo:empty,title:newItem.author.name,subTitle:newItem.author.desc,rightIcon:'more_vert'}}
              title={newItem.title}
              subTitle={newItem.subTitle}
              content={newItem.content}
              image={primary}
              mode='covered-title'
              onClick={this.handlePostClick.bind(this,-1)}
            />
            {
              popular.list&&popular.list.map((post,idx)=>{
                const {author,_id} = post
                const head = author? {'iconInfo':headIcon,title:author.nickName,subTitle:author.desc,rightIcon:'more_vert'} : null
                return(
                  <View className='mdui-m-b-2' key={idx} onClick={this.handlePostClick.bind(this,_id)}>
                    <MdCard head={head} title={post.title} subTitle={post.subTitle} content={post.content} image={post.banner[0]} actions={['收藏','我要参团']} mode='covered-title'/>
                  </View>
                )
              })
            }
          </View>
        </MdTabs>
        <View className='mdui-m-b-2'>
          <MdCard head={{'iconInfo':headIcon,title:'北鼎',subTitle:'北鼎天猫店',rightIcon:'more_vert'}} title='Buydeem/北鼎即热式饮水机' subTitle='全自动S603' content={content} image={IMG} actions={['收藏','我要参团']} mode='covered-title'/>
        </View>
        <View className='mdui-m-b-2'>
        <MdCard head={{'iconInfo':headIcon,title:'慧绘',subTitle:'美食记',rightIcon:'more_vert'}}
          actions={[{text:'收藏',className:'mdui-color-theme-a100'},{text:'开团通知',className:'mdui-color-theme-a100'},{text:'更多',icon:'expand_more',className:'mdui-float-right'}]}
          title='慧绘美食记' subTitle='慧绘优品' content={content} image={IMG} mode='covered-title'
        />
        </View>
        <ImageSelector/>
        {/*<MdFab icon='add' trigger='click' onClick={this.handleFabClick.bind(this)}/>*/}
      </View>
    )
  }
}

export default Home
