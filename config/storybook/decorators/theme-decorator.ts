import type { Decorator, StoryContext } from '@storybook/vue3'
import type { Theme } from 'shared/composables'

export default function ThemeDecorator(): Decorator {
  return (story, context: StoryContext) => {
    const theme = context.globals.theme as Theme

    return {
      components: { story },
      template: `
        <div class="app ${theme}">
          <story />
        </div>
      `,
    }
  }
};
