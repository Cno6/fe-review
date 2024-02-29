import type { Meta, StoryObj } from '@storybook/vue3'

import { DarkThemeIcon } from 'shared/assets'
import AppButton from './AppButton.vue'

const meta = {
  title: 'shared/Button',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['primary', 'secondary', 'icon', 'filled'] },
  },
  args: {
    default: 'Click me',
  },
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { }

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

export const Filled: Story = {
  args: {
    theme: 'filled',
  },
}

export const Icon: Story = {
  args: {
    theme: 'icon',
  },
  parameters: {
    slots: {
      default: {
        components: { DarkThemeIcon },
        template: '<DarkThemeIcon />',
      },
    },
  },
}
