import type { Meta, StoryObj } from '@storybook/vue3'

import HomePage from './HomePage.vue'

const meta = {
  title: 'pages/Home',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => {
    return {
      components: { HomePage },
      template: `
      <div class="app" style="display: flex; width: 100%; height: 100vh;">
        <div style="padding: 20px; flex-grow: 1;">
          <HomePage />
        </div>
      </div>`,
    }
  },
}
