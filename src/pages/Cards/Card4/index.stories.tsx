import type { Meta, StoryObj } from '@storybook/react'

import { Card4 } from '.'

const meta: Meta<typeof Card4> = {
  title: 'Pages/Cards/Card4',
  component: Card4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}