/**
 * Created by lhq on 2020/2/2 0002.
 */

import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import {View, Input} from '@tarojs/components';
import {MdDrawer, MdList, MdListItem,MdInput} from "../../../components/mdui";
// import "taro-ui/dist/style/components/list.scss";
// import "taro-ui/dist/style/components/drawer.scss";
import './index.scss'

class GoodsDrawer extends Component {
  static defaultProps = {
    allItems:[]
  };

  constructor(props) {
    super(props);
    this.state = {
      show:false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.active != this.state.show){
      this.setState({show:nextProps.active})
    }
  }

  UNSAFE_componentWillMount(nextProps) {
    Taro.eventCenter.on('EVT_SHOW_GOODS', callback=>{
      this.callback = callback;
      this.setState({show:true})
    })
  }

  handle = (item) => {
    // this.props.onSelectItem(item)
    // Taro.eventCenter.trigger('EVT_SELECT_GOOD',item)
    this.callback && this.callback(item);
    this.setState({show:false})
  }

  render() {
    const {active, allItems} = this.props;
    const {show} = this.state;
    console.log(allItems)

    return (
      <View >
        <MdDrawer show={show} mask onClose={()=>{this.setState({show:false})}}>
          <MdInput
            placeholder='商品链接' style='margin-top:100px;border: #5CD35E 1px solid;font-size:16px;height:30px;padding:5px'
            onConfirm={this.handle}
          />
          <MdList>
            {allItems.map((item,idx) => {
              const { _id, primary,title,banner=[] } = item
              return (
                  <MdListItem key={_id}
                    title={title}
                    iconInfo={primary||banner[0]}
                    onClick={this.handle.bind(this,item)}
                  />
              )
            })}
          </MdList>
        </MdDrawer>
      </View>
    );
  }
}

export default GoodsDrawer
