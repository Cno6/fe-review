import type { Meta, StoryObj } from '@storybook/vue3'

import AppLoader from './AppLoader.vue'

const meta = {
  title: 'shared/AppLoader',
  component: AppLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
