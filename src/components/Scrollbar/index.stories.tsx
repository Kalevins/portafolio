import type { Meta, StoryObj } from '@storybook/react'

import { Scrollbar } from '.'
import { useMotionValue } from 'framer-motion'

const meta: Meta<typeof Scrollbar> = {
  title: 'Components/Scrollbar',
  component: Scrollbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const scrollYProgress = useMotionValue(1)

export const Default: Story = {
  args: {
    scrollYProgress,
    cards: 3,
    handleClickScroll: () => {},
  }
}