import Taro from '@tarojs/taro';
import React, { Component } from 'react'
import { View,Input,Textarea } from '@tarojs/components';
import './index.scss';
import classNames from 'classnames';

class EditorView extends Component {

  state = {
    inputValue:'',
    focus: false,
  };

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {

  }

  handleClick(){
    this.setState({hidden:false})
  }

  handleInput(e){
    const {data,key,onChanged} = this.props;
    data[key] = e.detail.value;
    this.setState({inputValue: e.detail.value})
    // onChanged && onChanged(key,e.detail.value)
  }

  handleFocus(){
    const {data,key,tools} = this.props;
    this.setState({focus:true,inputValue:data[key]})
  }
  render() {
    const {data,key,tools,className,children,input} = this.props;
    const {focus,inputValue} = this.state;
    const inputCls = classNames('editor-view-input',{'editor-view-input-focus':focus},className)
    return (
      <View className={classNames('editor-view',className)} onClick={this.handleClick.bind(this)}>
        {children&&<View style={`visibility:${focus?'hidden':'visible'}`}>{children}</View>}
        {input&&<Textarea className={inputCls} value={inputValue} onFocus={this.handleFocus.bind(this)} onInput={this.handleInput.bind(this)} onBlur={_=>this.setState({focus:false,inputValue:''})} />}
      </View>
    )
  }
}
export default EditorView
