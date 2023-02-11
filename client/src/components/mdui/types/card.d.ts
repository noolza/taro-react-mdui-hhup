import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import MdBaseProps, { MdItemProps} from './base'

export interface CardHeadProps extends MdItemProps {

  /**
   * 左边icon 信息
   */

  // iconInfo?: AtIconBaseProps|string

  /**
   * 右边icon 信息
   */
  rightIcon?: string
}

export interface MdCardProps extends MdBaseProps {
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 元素的辅助信息
   */
  subTitle?:string
  content?: string
  /**
   * 头像栏
   */
  head?: CardHeadProps
  /**
   * 元素的缩略图
   */
  image:string
  /**
   * [string] | [MdCardAction]
   */
  actions?: Array<any>
  mode?:string
  onClick?: CommonEventFunction
  onLoad?: CommonEventFunction
}
export interface MdCardAction {
  value:string
  type?:'icon'|'text'
  className?:string
}

declare const MdCard: ComponentClass<MdCardProps>

export default MdCard
