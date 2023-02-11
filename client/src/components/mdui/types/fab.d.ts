import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'


import MdBaseProps, {MdItemProps} from './base'

export interface MdFabProps extends MdBaseProps {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  icon: string
  switchIcon: string
  small: boolean
  items?: Array<MdItemProps>
  trigger?: 'hover'|'click'
  mask?:boolean
  /**
   * 点击标签时触发
   */
  onClick?: CommonEventFunction
  onItemClick?: CommonEventFunction
}

export interface MdFabStateProps {
  status: string
}

declare const MdFab: ComponentClass<MdFabProps>

export default MdFab
