import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import MdBaseProps from './base'

export interface AppbarProps extends MdBaseProps {
  fixed?:boolean,
  shadow?:boolean,
  autoHide?:boolean,
  onClick: (index: number, event: CommonEvent) => void
}

declare const AppBar: ComponentClass<AppbarProps>

export default AppBar
