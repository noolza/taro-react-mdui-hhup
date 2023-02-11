/**
 * Created by lhq on 2020/7/9 0009.
 */

import Taro from '@tarojs/taro';
import React, {Component} from 'react'
import {View, Button, Input, Canvas, Image} from '@tarojs/components';
import classNames from 'classnames'
// import {AtImagePicker, AtModal, AtModalAction, AtModalContent} from "taro-ui";
import './index.scss';

const ENV = Taro.getEnv()

export default class ImageSelector extends Component {
  static defaultProps = {
    files:'',
    show:false
  };

  constructor(props) {
    super(props);
    this.state = {
      files:[],
      show:false,
      ratio: 2,
      //压缩图宽限制 800-28s  600-21s
      phtoWidth: 750,
      //压缩图高限制
      phtoHeight: 750,
      url:''
    };
    Taro.eventCenter.on('EVT_SHOW_IMAGEPICKER',(callback,files)=>{
      var st = {show:true};
      if(typeof files == 'string'){
        st.url = files;
      } else if(Array.isArray(files)){
        st.files = files;
      }
      this.setState(st);
      this.callback = callback;
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // if(this.state.show!=nextProps.isOpened){
    //   console.log('nex',nextProps.isOpened);
    //   this.setState({show:nextProps.isOpened})
    // }
  }

  handleClose = () => {
    // Taro.eventCenter.trigger('EVT_CLOSE_IMAGEPICKER',this.state.files)
    console.log('model closed')
    this.props.onClose && this.props.onClose();
    this.callback = null;
    this.setState({files:[],url:'',show:false})
  };

  async handleComfirm(){
    const {files,url} = this.state;
    if(files.length>0)
      await this.scaleImage();

    if(this.callback && (files.length>0 || url))
      this.callback(files,url);
    this.callback = null;
    this.setState({files:[],url:'',show:false})
  }

  async scaleImage() {
    const {files} = this.state;
    for(const f of files) {
      // const blob = this.convertBase64UrlToBlob(f.tempFilePath)
      // const urlB = URL.createObjectURL(blob);

      if(f.size > 200 * 1024) {
        var obj = await this.getCanvasImg(f.url)
        f.url = obj.path;
      }
    }
    this.setState({files})
  }

  getCanvasImg(filePath){
    return new Promise((resolve, reject) => {
      const that = this
      const { ratio, phtoWidth, phtoHeight } = this.state
      Taro.getImageInfo({src: filePath}).then(res => {
        let canvasWidth = res.width
        let canvasHeight = res.height
        if(canvasWidth > phtoWidth) {
          //比例取整
          canvasWidth = phtoWidth
          canvasHeight = phtoWidth/res.width*res.height
        }
        that.setState({
          cWidth: canvasWidth,
          cHeight: canvasHeight
        })
        let imgObj = {width:canvasWidth,height:canvasHeight}
        if(process.env.TARO_ENV === 'h5'){
          const ctx = Taro.createCanvasContext("canone")
          var img = new Image()
          img.src = filePath.file.path
          img.onload = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
            ctx.draw(false, () => {
              Taro.canvasToTempFilePath({
                canvasId: "canone",
                destWidth: canvasWidth,
                destHeight: canvasHeight,
                fileType: "jpeg",
                success: res2 => {
                  imgObj.path = res2.tempFilePath;
                  resolve(imgObj)
                }
              })
            })
          }
        } else{
          const ctx = Taro.createCanvasContext("canone",this.$scope)
          setTimeout(() => {
            ctx.drawImage(filePath, 0, 0, canvasWidth, canvasHeight)
            ctx.draw(true, () => {
              Taro.canvasToTempFilePath({
                canvasId: "canone",
                destWidth: canvasWidth,
                destHeight: canvasHeight,
                fileType:'jpg',
                success: res2 => {
                  // 上传压缩后的图片 res2.tempFilePath
                  // this.uploadLoader(fileNameKey,res2.tempFilePath,uploadType)
                  imgObj.path = res2.tempFilePath;
                  resolve(imgObj)
                }
              },this.$scope)
            })
          }, 0)
        }
      })
    })
  }

  convertBase64UrlToBlob(urlData){
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
    while(n--){
      u8arr[n] = bstr.charCodeAt(n)
    }
    var b = new Blob([u8arr], {type:mime})
    return b
  }

  // 上传组件
  uploadLoader = (fileNameKey,filePath,uploadType) => {
    const payload = {
      filePath: filePath,
      formData: {
        fileNameKey: fileNameKey,
      },
    }
  }

  onChange(files) {
    // var url = files.length>1?files.length+'张图片':files[0]['url'];
    console.log(files[0].file)
    this.setState({
      files:files,
      show:true
    });
  }

  handleInput(e){
    console.log(e.detail.value);
    if(!e.detail.value){
      return;
    }
    var f = this.state.files;
    f.push({url:e.detail.value});
  }

  handleRemove(idx){
    const {files} = this.state;
    files.splice(idx,1);
    this.setState({files})
  }

  handlePickClick() {
    const { multiple, count, sizeType, sourceType } = this.props
    const {files} = this.state;
    const filePathName = ENV === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'
    const params = {}
    if (multiple) {
      params.count = 99
    }
    if (count) {
      params.count = count
    }
    if (sizeType) {
      params.sizeType = sizeType
    }
    if (sourceType) {
      params.sourceType = sourceType
    }
    Taro.chooseImage(params).then(res => {
      const targetFiles = res.tempFilePaths.map((path, i) => ({
        url: path,
        file: res[filePathName][i]
      }))
      const newFiles = files.concat(targetFiles)
      this.onChange(newFiles)
    })
    .catch(this.props.onFail)
  }

  render() {
    const {onClose, compStyle} = this.props;
    const { cWidth, cHeight, files,show } = this.state
    // console.log(this.state.show);
    const cls = classNames('mdui-dialog',{'mdui-dialog-open':show})
    const msk = classNames('mdui-dialog-mask','mdui-mask',{'mdui-mask-show':show})
    return (
      <View className={msk}>
      <View className={cls} >
        <View style='position:absolute;left:-1000px;top:-1000px;'>
          <Canvas canvasId='canone' style={{ width: cWidth+'px', height:cHeight+'px'}}></Canvas>
        </View>

        <View className='mdui-dialog-title'>选择图片</View>
        <Input className='mdui-textfield-input' placeholder='输入链接' value={this.state.url} onConfirm={this.handleInput.bind(this)} onInput={(e)=>{this.setState({url:e.detail.value})}} />
        <View className='mdui-row-xs-3 mdui-row-sm-4 mdui-row-md-5 mdui-row-lg-6 mdui-row-xl-7 mdui-grid-list'>
        {
          files.map((f,idx)=>{
            return (<View className='mdui-col' key={idx} style='height:88px;width:88px;'>
              <View className='mdui-grid-tile' style='height:88px;width:88px;'>
                <Image src={f.url} mode='widthFix' />
              </View>
              <Button className='mdui-btn mdui-btn-icon mdui-btn-dense' style='position:absolute;right:0px;top:0px;z-index:1000' onClick={this.handleRemove.bind(this,idx)}><View className='mdui-icon material-icons'>clear</View></Button>
            </View>)
          })
        }
          <View className='mdui-col' >
            <View className='mdui-grid-tile' style='width:88px;height:88px'>
              <Button href='javascript:;' className='mdui-btn mdui-btn-big' onClick={this.handlePickClick.bind(this)}><View style='color:gray;font-size:40px;' className='mdui-icon material-icons'>add</View></Button>
            </View>
          </View>
        </View>
        <View className='mdui-dialog-actions'>
          <Button className='mdui-btn mdui-ripple' onClick={this.handleClose.bind(this)}>取消</Button>
          <Button className='mdui-btn mdui-ripple' onClick={this.handleComfirm.bind(this)}>确定</Button>
        </View>
      </View>
      </View>
      // <AtModal isOpened={this.state.show} onClose={this.handleClose.bind(this)}>
      //   {/*<AtModalHeader>选择图片</AtModalHeader>*/}
      //   <View style='position:absolute;left:-1000px;top:-1000px;'>
      //     <Canvas canvasId='canone' style={{ width: cWidth+'px', height:cHeight+'px'}}></Canvas>
      //   </View>
      //   <AtModalContent>
      //     <Input className='image-url-input' placeholder='输入链接' value={this.state.url} onConfirm={this.handleInput.bind(this)} onInput={(e)=>{this.setState({url:e.detail.value})}}/>
      //     <AtImagePicker files={this.state.files} multiple mode='widthFix' length={4} count={99} onChange={this.onChange.bind(this)}/>
      //   </AtModalContent>
      //   <AtModalAction>
      //     <Button onClick={this.handleClose.bind(this)}>
      //       取消
      //     </Button>
      //     <Button onClick={this.handleComfirm.bind(this)}>
      //       确定
      //     </Button>
      //   </AtModalAction>
      // </AtModal>
    );
  }
}

