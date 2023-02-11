import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import MdBaseProps, { MdIconBaseProps, MdItemProps} from './base'

export interface MdListProps extends MdBaseProps {
  /**
   * 是否有边框
   * @default true
   */
  border?: 'inset'|'light'|'dark'|'inset-dark'|'inset-light'|boolean
  /**
   * 列表
   */
  items?: Array<MdItemProps>
}

export interface MdListItemProps extends MdItemProps {
  /**
   * 是否禁用
   * @default false
   */
  active?: boolean

  /**
   * 控制类型
   */
  type?: 'switch'|'check'

  /**
   * 额外信息开关的值
   */
  state?: boolean


  border?: 'inset'|'light'|'dark'|'inset-dark'|'inset-light' | boolean
  /**
   * 左边icon 信息
   */
  // iconInfo?: AtIconBaseProps|string
  /**
   * 右边icon 信息
   */
  rightIcon?: MdIconBaseProps

  /**
   * 用户点击元素触发的事件
   */
  onClick?: CommonEventFunction
  /**
   * 用户点击切换 Switch 时触发
   */
  onChange?: CommonEventFunction,

}

export const MdList: ComponentClass<MdListProps>

declare const MdListItem: ComponentClass<MdListItemProps>

export default MdListItem
