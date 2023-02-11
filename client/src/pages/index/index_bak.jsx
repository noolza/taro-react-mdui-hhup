import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Button, Text } from '@tarojs/components'
import {MdButton, MdAccordion, MdListItem, MdList, MdTabs, AppBar, MdInput, MdNavbar, MdLoading, MdDrawer, AtAccordion, MdCard,MdFab,mdui} from '../../components/mdui';
import './index.scss'

const IMG = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601062354839&di=38b43b33e7374305153871389933f023&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fd3c06f81e0924675b94f6ba954d99c71.jpg'
class Index extends Component {
  constructor(props){
    super(props)
    this.state = {showDrawer:false}
  }
  componentDidMount(){
    mdui.mutation('.mdui')
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  onPageScroll(e){
    mdui.onPageScroll(e);
  }
  handleMenu (act,idx) {
    const st = {}
    // const act = e.currentTarget['data-action'];
    if(act == 'menu') {
      mdui.showDialog({
        title:'慧绘美食记',
        content:'子曰：「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」',
        actions:['OK','Cancel']
      })
      mdui.showTip({target:'#tip',content:'hello'});
    } else if(act == 'chevron_left') {
      st.showDrawer = true
      Taro.navigateTo({
        url: `/pages/home/index`
      })
    }
    this.setState(st);
  }

  componentDidShow () {
    // mdui.showDialog({title:'慧绘美食记',content:'hello'})
  }

  componentDidHide () { }

  render () {
    const list = [
      {title:'phone',icon:'phone'},
      {title:'favorite',icon:'favorite'},
      {title:'contact',icon:'perm_contact_calendar'}
    ]
    const head = {title:'慧绘',subTitle:'美食记', iconInfo:IMG, rightIcon:'more_vert'}
    return (
      <View className='mdui mdui-appbar-with-tab-larger mdui-theme-accent-light-green mdui-theme-primary-light-green mdui-appbar-with-toolbar'>
        <MdDrawer show={this.state.showDrawer} mask={false} items={[{title:'title',subTitle:'content',iconInfo:'chat_bubble'},{title:'title',subTitle:'content',iconInfo:{type:'avatar',value:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601062354839&di=38b43b33e7374305153871389933f023&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170929%2Fd3c06f81e0924675b94f6ba954d99c71.jpg'}}]}>
          <AtAccordion title='慧绘' actions={['ok','cancel']} >
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} rightIcon={{'value':'chat_bubble',type:'icon'}} border type='switch' state />
          </AtAccordion>
          <AtAccordion title='慧绘'>
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} rightIcon={{'value':'chat_bubble',type:'icon'}} border type='switch' state />
          </AtAccordion>
          <AtAccordion title='慧绘'>
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
            <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} rightIcon={{'value':'chat_bubble',type:'icon'}} border type='switch' state />
          </AtAccordion>
        </MdDrawer>

        <AppBar autoHide fixed shadow={false} >
          <MdNavbar leftIcon={['chevron_left','menu']} rightIcon='search' title='慧绘美食记' onClickAction={this.handleMenu.bind(this)} />
          <MdTabs tabList={list} onClick={()=>{}} />
        </AppBar>
        <View id='tip' style='widht:100px;height:100%' />

        <MdCard
          mode='covered-title'
          head={head}
          actions={['action0','action1','actions2']}
          title='慧绘'
          subTitle='美食记'
          content='子曰：「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」'
          image={IMG}
          onClick={()=>{}}
        />
        <MdTabs current={0} tabList={list} onClick={()=>{}} scroll={false} height='200px' className='mdui-shadow-1'>
          <View className='mdui-tab-panel'>
            <MdList>
              <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
              <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
              <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} rightIcon={{'value':'chat_bubble',type:'icon'}} border type='switch' state />
              <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} />
              <MdListItem title='title' subTitle='node' iconInfo={{'value':IMG,type:'img'}} />
            </MdList>
          </View>
          <View className='mdui-tab-panel' data-mdui-tooltip onClick={e=>console.log(e)}>
            <MdButton size='small' icon='add' className='mdui-btn-raised' />
            <MdButton size='normal' >确定</MdButton>
            <MdButton size='normal' icon='add' full className='mdui-btn-raised' />
          </View>
          <View className='mdui-tab-panel'>
            <MdList border items={[{title:'title',subTitle:'content',iconInfo:'chat_bubble'},{title:'title',subTitle:'content',iconInfo:{type:'avatar',value:IMG}}]} />
          </View>
        </MdTabs>
        <MdAccordion title='慧绘' actions={['ok','cancel']} >
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} rightIcon={{'value':'chat_bubble',type:'icon'}} border type='switch' state />
        </MdAccordion>
        <MdAccordion title='慧绘' actions={['ok','cancel']} >
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
        </MdAccordion>
        <MdAccordion title='慧绘' actions={['ok','cancel']} >
          <MdListItem title='title' subTitle='node' iconInfo={{'value':IMG,type:'img'}} />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':IMG,type:'img'}} />
        </MdAccordion>
        <MdAccordion title='慧绘' actions={['ok','cancel']} >
          <MdListItem title='title' subTitle='node' iconInfo={{'value':IMG,type:'avatar'}} />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':IMG,type:'avatar'}} />
        </MdAccordion>
        <MdList>
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} border='inset' type='check' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'avatar'}} border type='switch' state />
          <MdListItem title='title' subTitle='node' iconInfo={{'value':'chat_bubble',type:'icon'}} />
        </MdList>
        <MdList border items={[{title:'title',subTitle:'content',iconInfo:'chat_bubble'},{title:'title',subTitle:'content',iconInfo:{type:'avatar',value:IMG}}]} />
        <MdButton icon='add' circle />
        <MdButton icon='add' />
        <MdButton icon='add' />

        <MdInput type='text' floatLabel='昵称' />
        <MdInput icon='email' helpLabel='密码' />
        <MdInput icon='email' type='number' />
        <MdInput icon='email' type='idcard' />
        <MdInput icon='email' type='digit' />

        <MdLoading mode='line' />
        <MdLoading />
        <MdFab icon='add' trigger='click' items={[{iconInfo:'chat_bubble'},{iconInfo:'chat_bubble'}]} onItemClick={idx=>{console.log(idx)}} />

      </View>
    )
  }
}

export default Index

