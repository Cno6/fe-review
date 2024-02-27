const process = require('node:process')
const antfu = require('@antfu/eslint-config').default
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

module.exports = antfu(
  {
    vue: true,
    typescript: {
      tsconfigPath: './tsconfig.json',
      overrides: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'error',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'error',
    },
  },
  ...compat.config({
    env: {
      jest: true,
    },
  }),
)
