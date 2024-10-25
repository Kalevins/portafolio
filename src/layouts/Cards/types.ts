import { MutableRefObject, ReactNode } from 'react'

export interface Props {
  children: ReactNode,
  innerRef: MutableRefObject<HTMLDivElement | null>
}