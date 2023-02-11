import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Text, Input, Button} from '@tarojs/components';
import classNames from 'classnames'
import './index.scss'
import {MdAccordion, MdInput} from "../../../../components/mdui";

export default class InfoParam extends Component {
  static defaultProps = {
    list: []
  }
  onClickRemoveBtn=(idx)=>{
    const { list } = this.props
    list.splice(idx,1)
    this.setState({})
  }

  onClickAddBtn=(idx)=>{
    const { list } = this.props
    list.push({
      "attrName": "名称",
      "attrValue": "描述"
    })
    this.setState({})
  }

  moveTo(idx,dir){
    const {list} = this.props;
    if(idx+dir<0 || idx+dir>=list.length){
      return;
    }
    var curEle = list[idx];
    var toEle = list[idx+dir];
    list[idx] = toEle
    list[idx+dir] = curEle
    this.setState({});
  }

  handleFormat(idx){
    const{attrValue} = this.state;
    const { list } = this.props

    var attrs = attrValue.split('\n');
    for(var i=0;i<attrs.length;i++){
      var line = attrs[i];
      var separator = line.indexOf(':')>=0 ? ':' : ' '
      var sub = attrs[i].split(separator)
      list.push({attrName:sub[0],attrValue:sub[1]});
    }
    this.setState({})
  }

  onInputValue(idx,e){
    const { list } = this.props
    const item = list[idx];
    let t=item.attrValue;
    item.attrValue=e.detail.value;
    if(!e.detail.value||!t){
      this.setState({})
    }
  }

  render () {
    const { list } = this.props
    const {inputIdx} = this.state;
    console.log(list)
    return (
      <View className='item-info-param'>
        <View className='item-info-param__title'>
          <Text className='item-info-param__title-txt'>准备</Text>
          <View className='add-btn' onClick={this.onClickAddBtn.bind(this)}></View>
          <MdAccordion
            open={this.state.open}
            onClick={e=>{this.setState(
              {open:e})}}
            title='智能识别'
          >
            <MdInput
              customStyle='margin:5px;width:98%;white-space:nowrap;text-overflow:ellipsis;wrap:off'
              count={false}
              value={this.state.attrValue}
              onChange={e => {this.setState({attrValue:e})}}
              placeholder='材料名称:材料分量'
              maxLength={9999}
            />
            <View style='display:flex;margin-bottom:10px;warp:off' >
              <Button size='mini' type='primary' text='确定' style='flex:auto;width:100px' onClick={this.handleFormat.bind(this)}>确定</Button>
            </View>
          </MdAccordion>
        </View>
        {list.map((item, index) => (
          <View key={index} className='item-info-param__item'>
            <Input className={classNames('item-info-param__item-name',{'item-info-param__item-name-group':!item.attrValue})} value={item.attrName} placeholder='材料' onInput={(e)=>{item.attrName=e.detail.value}}/>
            <Input className='item-info-param__item-value' value={item.attrValue} placeholder={item.attrName?'':'用量'} onInput={this.onInputValue.bind(this,index)}/>

            <Text className='eicon eicon-remove' onClick={this.onClickRemoveBtn.bind(this, index)}/>
            <Text className='eicon eicon-move-top' onClick={this.moveTo.bind(this, index, -1)}></Text>
            <Text className='eicon eicon-move-btm' onClick={this.moveTo.bind(this, index, 1)}></Text>
          </View>
        ))}
      </View>
    )
  }
}
