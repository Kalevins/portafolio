import type { Meta, StoryObj } from '@storybook/react'

import { Card2 } from '.'

const meta: Meta<typeof Card2> = {
  title: 'Pages/Cards/Card2',
  component: Card2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}