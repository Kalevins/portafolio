import { MutableRefObject, ReactNode } from 'react'

export interface Props {
  children: ReactNode,
  ref: MutableRefObject<HTMLDivElement | null>
}