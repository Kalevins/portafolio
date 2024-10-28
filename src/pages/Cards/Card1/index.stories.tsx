import type { Meta, StoryObj } from '@storybook/react'

import { Card1 } from '.'

const meta: Meta<typeof Card1> = {
  title: 'Pages/Cards/Card1',
  component: Card1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}