/**
 * Created by lhq on 2020/7/9 0009.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Button} from '@tarojs/components';
// import {AtList, AtListItem, AtModal, AtModalAction, AtModalContent} from "taro-ui";
import './index.scss';

export default class CateSelector extends Component {
  static defaultProps = {
    category:[],
    itemCategory:[],
    show:false
  };

  constructor(props) {
    super(props);
    this.state = {
      cates:[],
      show:false
    };
    Taro.eventCenter.on('EVT_SHOW_CATEPICKER',(callback)=>{
      this.setState({show:true});
      this.callback = callback;
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.state.show!=nextProps.isOpened){
      var cates =[];
      var fn = (id,obj)=> {
        for(var i=0;i<obj.length;i++){
          if(obj[i]._id == id){
            return i
          }
        }
        return -1;
      }
      if(nextProps.isOpened){
        const{itemCategory=[],category} = nextProps;
        for(var i=0;i<itemCategory.length;i++){
          var idx = fn(itemCategory[i]['_id'],category);
          if(idx>=0){
            cates.push(idx);
          }
        }
      }
      this.setState({show:nextProps.isOpened,cates:cates})
    }
  }

  handleClose = () => {
    // Taro.eventCenter.trigger('EVT_CLOSE_IMAGEPICKER',this.state.files)
    console.log('model closed')

    this.props.onClose && this.props.onClose();
    this.callback = null;
  };

  handleComfirm(){
    const{category,itemCategory} = this.props;
    const{cates} = this.state;
    itemCategory.length=0;
    for(var i=0;i<cates.length;i++){
      itemCategory.push(category[cates[i]])
    }
    this.callback && this.callback();
    this.callback = null;
    this.setState({show:false})
    console.log(itemCategory)
  }

  onChange(idx,e) {
    const{cates} = this.state;
    var i = cates.indexOf(idx);

    if(e.detail.value&&i<0){
      cates.push(idx);
    }
    if(!e.detail.value&&i>=0){
      cates.splice(i,1);
    }
    this.setState({cates});
  }
  handleInput(e){
    console.log(e.detail.value);
    if(!e.detail.value){
      return;
    }
    var f = this.state.files;
    f.push({url:e.detail.value});
  }
  render() {
    const {category} = this.props;
    console.log(category)
    return (
      <View className='' style='z-index:100'>
        <AtModal isOpened={this.state.show} onClose={this.handleClose.bind(this)}>
          <AtModalContent>
            <AtList>
              {category.map((item,idx)=>{
                const isSelected = this.state.cates.indexOf(idx)>=0;
                return (
                  <AtListItem
                    isSwitch
                    title={item.value}
                    onSwitchChange={this.onChange.bind(this,idx)}
                    switchIsCheck={isSelected}
                  />
                )
              })}
            </AtList>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.handleClose.bind(this)}>
              取消
            </Button>
            <Button onClick={this.handleComfirm.bind(this)}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>
      </View>
    );
  }
}

