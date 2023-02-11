/**
 * 由于 taro 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
 * */
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json','.jsx','less'],
    alias: {
      '@mdui-react': resolve('../../../../../packages/mdui/__REACT'),
      '@mdui': resolve('../../../../../packages/mdui/__REACT/components'),
      '@assets': resolve('./src/assets'),
      '@utils': resolve('./src/utils'),
      '@cloud': resolve('../cloud'),
    }
  }
}

