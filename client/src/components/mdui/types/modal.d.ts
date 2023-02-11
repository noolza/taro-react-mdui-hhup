import { MouseEvent, ComponentClass } from "react"
import { CommonEventFunction } from "@tarojs/components/types/common"

import AtComponent from "./base"

export interface AtModalProps extends AtComponent {
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 是否显示模态框
   * @default false
   */
  open: boolean
  /**
   * 元素的内容
   */
  content?: string
  /**
   * 点击浮层的时候时候自动关闭
   * @default true
   */
  closeOnClickOverlay?: boolean

  actions?:Array<string>
  /**
   * 触发关闭时的事件
   */
  onClose?: CommonEventFunction

  /**
   * 点击确认按钮触发的事件
   */
  onAction?: CommonEventFunction
}

export interface AtModalState {
  _open: boolean
}

export interface AtModalActionProps extends AtComponent {
  isSimple: boolean
}

export interface AtModalContentProps extends AtComponent {}

export interface AtModalHeaderProps extends AtComponent {}

declare const AtModal: ComponentClass<AtModalProps>

export default AtModal
