import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import MdBaseProps, { MdIconBaseProps } from './base'

export interface MdNavBarProps extends MdBaseProps {
  /**
   * 标题文字
   */
  title?: string
  /**
   * 是否固定顶部
   * @default false
   */
  fixed?: boolean
  /**
   * 是否显示下划线
   * @since v1.4.0
   * @default true
   */
  border?: boolean

  autoHide:false
  /**
   * 左边图标类型，图标类型请看 AtIcon 文档
   * @default 'chevron-left'
   */
  leftIcon?: string | Array<string>

  /**
   * 从右到左，第一个图标类型，图标类型请看 AtIcon 文档
   */
  rightIcon?: string | [MdIconBaseProps] | MdIconBaseProps

  /**
   *  图标类型点击事件
   */
  onClickAction?: CommonEventFunction
}

declare const MdNavBar: ComponentClass<MdNavBarProps>

export default MdNavBar
