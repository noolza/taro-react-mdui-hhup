/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */

/* eslint-enable */
const NAVIGATOR_HEIGHT = 44
const TAB_BAR_HEIGHT = 50
export const IMG_TYPE ={
  AVATAR:0,
  POST:1,
  BANNER:2,
  COMMENT:3,
}

export const defaultBanner = [
  {
    title: '慧绘优品',
    des: '选最好的给你',
    color: '#d4e8c4',
    icon: require('@assets/images/banner/index_banner0.jpg')
  }
];
