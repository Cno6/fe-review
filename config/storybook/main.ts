import path from 'node:path'
import type { StorybookConfig } from '@storybook/vue3-webpack5'
import buildStyleLoader from '../build/loaders/style-loader'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-vue-slots',
  ],
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..', '..', 'src'), 'node_modules']
    config.resolve.extensions.push('.ts', '.vue')
    config.module.rules.push(buildStyleLoader(true))

    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
