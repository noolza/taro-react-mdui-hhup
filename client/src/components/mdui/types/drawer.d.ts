import { ComponentClass } from 'react'

import MdBaseProps, {MdItemProps} from './base'

export interface MdDrawerProps extends MdBaseProps {
  /**
   * 展示或隐藏
   * @default false
   */
  show: boolean
  /**
   * 是否需要遮罩
   * @default true
   */
  mask?: boolean
  /**
   * 抽屉宽度
   * @default 230px
   */
  width?: string
  /**
   * 是否从右侧滑出
   * @default false
   */
  right?: boolean
  /**
   * Array
   */
  items?: Array<MdItemProps>
  /**
   * 点击菜单时触发
   */
  onItemClick?: (index: number) => void
  /**
   * 动画结束组件关闭的时候触发
   */
  onClose?: () => void
}

export interface MdDrawerState {
  _show: boolean
}

declare const MdDrawer: ComponentClass<MdDrawerProps>

export default MdDrawer
