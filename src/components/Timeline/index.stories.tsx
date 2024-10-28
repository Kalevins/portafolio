import type { Meta, StoryObj } from '@storybook/react'

import { Timeline } from '.'

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    experiences: [
      {
        company: 'Company 1',
        position: 'Frontend Developer',
        dateInit: '2021-01-01',
        dateEnd: '2021-12-31',
        website: {
          show: true,
          url: 'https://www.company1.com',
        },
        description: [
          'Description 1',
          'Description 2',
        ],
        technologies: [
          'React',
          'TypeScript'
        ],
        level: 0,
      },
      {
        company: 'Company 2',
        position: 'Backend Developer',
        dateInit: '2022-01-01',
        dateEnd: '2022-12-31',
        website: {
          show: true,
          url: 'https://www.company2.com',
        },
        description: [
          'Description 1',
          'Description 2',
        ],
        technologies: [
          'Node.js',
          'TypeScript'
        ],
        level: 0,
      },
    ],
    handleExperienceActive: () => {},
  },
}