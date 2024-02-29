import type { Meta, StoryObj } from '@storybook/vue3'

import Sidebar from './Sidebar.vue'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => {
    return {
      components: { Sidebar },
      template: `
      <div style="display: flex; width: 100%; height: 100vh;">
        <Sidebar />
        <div style="flex-grow: 1;"></div>
      </div>`,
    }
  },
}
