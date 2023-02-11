import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './index.scss';
import NavBar from "../../components/nav-bar";

@connect(({user}) => ({...user}))
class User extends Component {
  static defaultProps ={
    prop:[]
  }
  state = {

  }

  componentWillMount() {

  };

  componentDidMount() {

  };

  render() {
    return (
      <View className='mdui-theme-primary-light-green mdui-theme-accent-light-green'>
        <NavBar icons={['settings']} title='个人中心' />
      </View>
    )
  }
}
export default User
