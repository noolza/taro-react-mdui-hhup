import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import {View, Swiper, SwiperItem, Image, Text, Block} from '@tarojs/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

export default class PPT extends Component {
  static propTypes = {
    banner: PropTypes.array,
  };

  static defaultProps = {
    banner: [],
  };

  state = {
    current:-1
  }

  componentDidMount() {
    this.count();
    this.setState({current:0})
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.play){
      this.timeout>=0 && clearTimeout(this.timeout);
      this.count();
    } else {
      this.timeout>=0 && clearTimeout(this.timeout);
    }
  }

  count() {
    const size = this.props.banner.length;
    this.timeout = setTimeout(() => {
      var idx = this.state.current;
      idx     = (idx+1)%size;
      this.setState({current: idx});
      clearTimeout(this.timeout)
      this.count();
    }, 5000);
  }

  handleClick(idx){
    // console.log(e.detail)
    this.props.onClick && this.props.onClick(idx);
  }

  render() {
    const { banner,height,play=true} = this.props;
    const {current=0} = this.state;
    return (
      <View className='ppt_banner at-row__align--center' style={{height:`${height}px`}} onClick={this.handleClick.bind(this,current)}>
        {banner.length > 0 &&
        banner.map((img, idx) => (
          <View className='ppt_banner_item' key={idx} >
            <Image
              className={classNames('ppt_banner_item-img', {active:(idx==current&&play)})}
              mode='widthFix'
              src={img}
            />
          </View>
          ))
        }

      </View>
    );
  }
}
