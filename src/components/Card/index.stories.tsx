import type { Meta, StoryObj } from '@storybook/react'

import image from '@/assets/images/card2.webp'
import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card',
    imgBackground: image,
  },
}