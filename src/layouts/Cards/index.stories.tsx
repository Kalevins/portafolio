import type { Meta, StoryObj } from '@storybook/react'

import { Cards } from '.'

const meta: Meta<typeof Cards> = {
  title: 'Layouts/Cards',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <div key="1">Card 1</div>,
      <div key="2">Card 2</div>,
      <div key="3">Card 3</div>,
    ],
  },
}