import type { Meta, StoryObj } from '@storybook/vue3'

import AboutPage from './AboutPage.vue'

const meta = {
  title: 'pages/About',
  component: AboutPage,
  tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => {
    return {
      components: { AboutPage },
      template: `
      <div class="app" style="display: flex; width: 100%; height: 100vh;">
        <div style="padding: 20px; flex-grow: 1;">
          <AboutPage />
        </div>
      </div>`,
    }
  },
}
