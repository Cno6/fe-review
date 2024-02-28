import { type Decorator, setup } from '@storybook/vue3'

import i18n from 'app/i18n'
import router from 'app/router'

setup((app) => {
  app.use(router)
  app.use(i18n)
})

export default function ThemeDecorator(): Decorator {
  return (story) => {
    return {
      components: { story },
      template: `<story />`,
    }
  }
};
