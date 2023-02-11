import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import {Image, Input, Text, View} from '@tarojs/components';
import './index.scss';
// import {AtGrid, AtIcon} from "taro-ui";
// import jump from "@utils/jump";
// import _isObject from "lodash/isObject";
import _chunk from 'lodash/chunk';
import classNames from 'classnames';
// import FS from "../../../utils/fs";

export default class Category extends Component {

  static defaultProps = {
    list: [],
    allList: [],
    mode: 'square',
    hasBorder: true,
    columnNum: 3
  };

  UNSAFE_componentWillMount() {
    // Taro.eventCenter.on('EVT_CLOSE_IMAGEPICKER',)
  }

  handleRemove(item, _, idx, e) {
    const {allList, columnNum} = this.props;
    var i                      = idx * columnNum + _;
    allList.splice(i, 1);
    this.setState({});
    e.stopPropagation();
  };

  handleClick(item, _, idx, e) {
    const {allList, columnNum} = this.props;

    if(item.key == 'add') {
      allList.push({
        value: '类名',
        image: 'image'
      });
      this.setState({});
    } else {
      this.setState({current: idx * columnNum + _});

      Taro.eventCenter.trigger('EVT_SHOW_IMAGEPICKER', (files,url)=>{
        // var idx              = this.state.current;
        var url = files.length>0?files[0]['url']:url;
        if(url){
          allList[this.state.current]['image'] = url;
          this.setState({});
        }
      });
    }
    // FS.chooseImage().then(res =>{
    //   allList[idx*columnNum+_]['icon'] = res.paths[0];
    //   this.setState({});
    // })
    e.stopPropagation();
    // jump({ url: '/pages/editor/index' })
  }

  chooseFile = (files) => {
    var idx              = this.state.current;
    const {allList}      = this.props;
    allList[idx]['image'] = files[0]['url'];
    this.setState({});
  };

  handleSelect(item, show, e) {
    const {list} = this.props;
    if(show) {
      for(var i = 0; i < list.length; i++) {
        if(list[i]._id == item._id) {
          list.splice(i, 1);
          break;
        }
      }
    } else {
      list.push(item);
    }
    this.setState({});
  }

  render() {
    const {list, allList, hasBorder, mode, columnNum} = this.props;
    const shown                                       = [];
    list.map(ct => {
      shown.push(ct._id);
    });

    const gridGroup = _chunk(allList.concat({
      value: '添加',
      image: 'add',
      key: 'add'
    }), columnNum);
    const bodyClass = classNames(
      ['at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`],
      {
        'at-grid-item--no-border': !hasBorder
      }
    );

    console.log(gridGroup);
    return (
      <View className='at-grid' style='z-index:0'>
        {gridGroup.map((item, i) => (
          <View className='at-grid__flex' key={`at-grid-group-${i}`}>
            {item.map((childItem, index) => {
              const isImg = childItem.image.indexOf('http') >= 0;
              const show  = shown.indexOf(childItem._id) >= 0;
              const col   = show ? 'red' : 'black';
              return (
                <View
                  key={`at-grid-item-${index}`}
                  className={classNames(bodyClass, {
                    'at-grid-item--last': index === columnNum - 1
                  })}
                  style={{
                    flex: `0 0 ${100 / columnNum}%`
                  }}
                >
                  <View className='at-grid-item__content' >
                    <View className='at-grid-item__content-inner'>
                      <View className='content-inner__icon'>
                        {isImg && (
                          <Image
                            className='content-inner__img'
                            src={childItem.image}
                            mode='scaleToFill'
                            onClick={this.handleClick.bind(this, childItem, index, i)}
                          />
                        )}

                        {!isImg && (
                          <Text
                            onClick={this.handleClick.bind(this, childItem, index, i)}
                            className={classNames('eicon', `eicon-${childItem.image}`)}
                            style='font-size:32px'
                          />
                        )}
                      </View>
                      {!childItem.key && <View className='editor-banner-float-br'>
                        <Text className='eicon eicon-check' onClick={this.handleSelect.bind(this, childItem, show)} style={`color:${col}`}/>
                      </View>
                      }
                      <Input className='content-inner__text' placeholder='类名' value={childItem.value}/>
                      {/*{childItem.iconInfo && <Input className='content-inner__text' placeholder='icon'>*/}
                      {/*  {childItem.iconInfo.value}*/}
                      {/*</Input>}*/}
                    </View>
                  </View>
                  {!childItem.key && <View className='editor-banner-float-tr'>
                    <View className='at-row'>
                      <Text className='eicon eicon-del' onClick={this.handleRemove.bind(this, childItem, index, i)}/>
                    </View>
                  </View>}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    );
  }
}

