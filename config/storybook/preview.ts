import type { Preview } from '@storybook/vue3'

import 'app/styles/index.scss'
import { Theme } from 'shared/composables/useTheme'
import ThemeDecorator from './decorators/theme-decorator'
import VueDecorator from './decorators/vue-decorator'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: Theme.LIGHT,
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: Object.values(Theme),
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    slots: {
      default: {
        description: 'Default slot content',
      },
    },
  },
  decorators: [
    ThemeDecorator(),
    VueDecorator(),
  ],
}

export default preview
