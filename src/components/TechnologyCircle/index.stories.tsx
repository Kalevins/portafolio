import type { Meta, StoryObj } from '@storybook/react'

import { TechnologyCircle } from '.'
import { technologies } from '../../utils'

const meta: Meta<typeof TechnologyCircle> = {
  title: 'Components/TechnologyCircle',
  component: TechnologyCircle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: technologies.React.name,
    url: technologies.React.url,
    icon: technologies.React.icon,
    isActive: false,
  },
}