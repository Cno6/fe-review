import path from 'node:path'
import type { StorybookConfig } from '@storybook/vue3-webpack5'
import type { RuleSetRule } from 'webpack'
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
    const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test('.svg'))

    if (fileLoaderRule)
      (fileLoaderRule as RuleSetRule).exclude = /\.svg$/

    config.module.rules.push(
      buildStyleLoader(true),
      {
        test: /\.svg$/,
        use: [
          'vue-loader',
          path.resolve(__dirname, '..', 'build', 'loaders', 'vue-svg-loader.ts'),
        ],
      },
    )

    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
