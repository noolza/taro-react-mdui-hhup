import Taro from '@tarojs/taro'

const NAVIGATOR_HEIGHT = 44
const TAB_BAR_HEIGHT = 50
const Env = Taro.getEnv();
/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param {*} showTabBar
 */

export function getWindowHeight(showTabBar = true) {
  const info = Taro.getSystemInfoSync();
  const { windowHeight, statusBarHeight, titleBarHeight } = info;
  const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0

  if (process.env.TARO_ENV === 'rn') {
    return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight
  }

  if (process.env.TARO_ENV === 'h5') {
    return windowHeight - tabBarHeight
  }

  if (process.env.TARO_ENV === 'alipay') {
    // NOTE 支付宝比较迷，windowHeight 似乎是去掉了 tabBar 高度，但无 tab 页跟 tab 页返回高度是一样的
    return windowHeight - statusBarHeight - titleBarHeight + (showTabBar ? 0 : TAB_BAR_HEIGHT)
  }

  return windowHeight
}

/**
 * // NOTE 样式在编译时会通过 postcss 进行处理，但 js 中的 style 可能需要运行时处理
 * 例如加 prefix，或者对 RN 样式的兼容，又或是在此处统一处理 Taro.pxTransform
 * 此处只做演示，若需要做完善点，可以考虑借助 https://github.com/postcss/postcss-js
 */
export function postcss(style) {
  if (!style) {
    return style
  }
  const { background, ...restStyle } = style
  const newStyle = {}
  if (background) {
    // NOTE 如 RN 不支持 background，只支持 backgroundColor
    newStyle.backgroundColor = background
  }
  return { ...restStyle, ...newStyle }
}

export function getSystemInfo() {
  if (Taro.globalSystemInfo && !Taro.globalSystemInfo.ios) {
    return Taro.globalSystemInfo;
  } else {
    let systemInfo = Taro.getSystemInfoSync() || {model: '', system: ''};
    const { windowHeight, statusBarHeight, titleBarHeight } = systemInfo;

    let winHeight = windowHeight;// web
    if (Env === Taro.ENV_TYPE.RN) {
      winHeight = windowHeight - statusBarHeight - NAVIGATOR_HEIGHT
    } else if (Env === Taro.ENV_TYPE.ALIPAY) {
      winHeight = windowHeight - statusBarHeight - titleBarHeight + TAB_BAR_HEIGHT //ali 默认是减掉tab高度的 为了统一这了加上
    }
    systemInfo.windowHeight = winHeight;
    systemInfo.windowHeightUseTab = winHeight - TAB_BAR_HEIGHT

    // h5环境下忽略navbar
    if (Env !== Taro.ENV_TYPE.WEB) {
      let ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
      let rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null;

      let navBarHeight = '';
      if (!systemInfo.statusBarHeight) {
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
        navBarHeight = (function () {
          let gap = rect.top - systemInfo.statusBarHeight;
          return 2 * gap + rect.height;
        })();

        systemInfo.statusBarHeight = 0;
      } else {
        navBarHeight = (function () {
          let gap = rect.top - systemInfo.statusBarHeight;
          return systemInfo.statusBarHeight + 2 * gap + rect.height;
        })();
      }
      systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight
      systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
      systemInfo.ios = ios; //是否ios
      systemInfo.customNavHeight = navBarHeight;
    }



    Taro.systemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了
    console.log('systemInfo::', systemInfo);
    return systemInfo;
  }
}

export function getSystemInfo_() {
  if (Taro.systemInfo) {
    return Taro.systemInfo;
  } else {
    // h5环境下忽略navbar
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      return {};
    }
    let systemInfo = Taro.getSystemInfoSync() || {
      model: '',
      system: ''
    };
    let ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
    let rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null;

    if (!systemInfo.statusBarHeight) {
      systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
    }
    let gap = 0// (rect.top - systemInfo.statusBarHeight)/2
    // systemInfo.statusBarHeight += gap;

    systemInfo.navBarExtendHeight = 0;
    let navBarHeight = rect.bottom;

    systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight
    systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
    systemInfo.ios = ios; //是否ios
    systemInfo.customNavHeight = navBarHeight + systemInfo.navBarExtendHeight;
    Taro.systemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了
    console.log('systemInfo::', systemInfo);
    return systemInfo;
  }
}
