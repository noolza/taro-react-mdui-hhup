import {Component} from 'react'

class BasicComponent extends Component {
  constructor(props,context) {
    super(props,context);
    this.ctor(props,context)
  }
  static getDerivedStateFromProps (){

  }
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {}

  // onLoad
  onLoad() {}

  // onReady
  onReady() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() {}
}
