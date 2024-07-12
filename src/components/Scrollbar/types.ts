import { MotionValue } from 'framer-motion'

export interface Props {
  scrollYProgress: MotionValue<number>
  cards: number
  handleClickScroll: (index: number) => void
}