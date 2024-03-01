import type { Meta, StoryObj } from '@storybook/vue3'

import NotFoundPage from './NotFoundPage.vue'

const meta = {
  title: 'pages/NotFound',
  component: NotFoundPage,
  tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => {
    return {
      components: { NotFoundPage },
      template: `
      <div class="app" style="display: flex; width: 100%; height: 100vh;">
        <div style="padding: 20px; flex-grow: 1;">
          <NotFoundPage />
        </div>
      <div />`,
    }
  },
}
