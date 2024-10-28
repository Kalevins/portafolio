import type { Meta, StoryObj } from '@storybook/react'

import { Card3 } from '.'

const meta: Meta<typeof Card3> = {
  title: 'Pages/Cards/Card3',
  component: Card3,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}