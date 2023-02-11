import { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import MdBaseProps from './base'

export interface MdAccordionPanelProps extends MdBaseProps {
  current: number
}

export interface MdAccordionProps extends MdBaseProps {
  /**
   * 是否默认开启
   * @default false
   */
  open?: boolean
  /**
   * 标题
   */
  title?: string
  subTitle?: string
  actions?: Array<string>
  /**
   * 图标，仅支持 MdIcon 支持的类型，
   * object 属性有 value color size prefixClass
   */
  icon?: string

  /**
   * 点击头部触发事件
   */
  onClick?: (open: boolean, event: CommonEvent) => void
  onActionClick?: (open: boolean, event: CommonEvent) => void
}

export interface MdAccordionState {
  opened?: boolean,
  loaded?: boolean,
  bodyStyle: string
}

declare const MdAccordion: ComponentClass<MdAccordionProps>

export default MdAccordion
