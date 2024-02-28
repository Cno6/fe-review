import type { Meta, StoryObj } from '@storybook/vue3'

import AppButton from './AppButton.vue'

const meta = {
  title: 'shared/Button',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['primary', 'secondary', 'icon'] },
  },
  parameters: {
    slots: {
      default: {
        description: 'Text inside button',
        template: 'Some Text',
      },
    },
  },

} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
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

export const Icon: Story = {
  args: {
    theme: 'icon',
  },
}
