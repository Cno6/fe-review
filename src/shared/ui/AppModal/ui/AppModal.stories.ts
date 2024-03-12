import type { Meta, StoryObj } from '@storybook/vue3'

import AppModal from './AppModal.vue'

const meta = {
  title: 'shared/AppModal',
  component: AppModal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit eligendi rem, molestiae magnam nam laborum autem est nisi repellendus velit perferendis alias qui consectetur mollitia culpa vitae exercitationem quam.',
  },
} satisfies Meta<typeof AppModal>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args) => {
    return {
      components: { AppModal },
      setup() {
        return { args }
      },
      template: `
      <body class="light" style="height: 50vh;">
        <AppModal v-bind="args">{{args.default}}</AppModal>
      </body>`,
    }
  },
}
