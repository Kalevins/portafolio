import type { Meta, StoryObj } from '@storybook/react'

import { AnimatedText } from '.'

const meta: Meta<typeof AnimatedText> = {
  title: 'Components/AnimatedText',
  component: AnimatedText,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    texts: [
      "Text 1",
      "Text 2",
      "Text 3",
      "Text 4",
    ],
  },
}