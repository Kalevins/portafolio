import type { Meta, StoryObj } from '@storybook/react'

import { App } from '.'

const meta: Meta<typeof App> = {
  title: 'Pages/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}