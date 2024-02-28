import type { Meta, StoryObj } from '@storybook/vue3'

import AppLink from './AppLink.vue'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Theme of the link',
    },
  },
  args: {
    default: 'Click me',
    to: '#',
  },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
}
