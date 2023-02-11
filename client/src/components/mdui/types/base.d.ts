import { CSSProperties } from 'react'

export interface MdBaseProps {
  className?: string
  customStyle?: string | object
}

export interface MdIconBaseProps extends MdBaseProps {
  value: string | ''
  type: 'icon' | 'img' | 'avatar'
}

export interface MdItemProps extends MdBaseProps {
  /**
   * 标题
   */
  title?: string
  /*
   * 副标题
   */
  subTitle?: string

  iconInfo?: MdIconBaseProps | string
}

export interface MdListItemProps extends MdItemProps {
  rightIcon?: MdIconBaseProps | string
  type?: 'switch' | 'check'
}

export default MdBaseProps
