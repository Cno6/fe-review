const process = require('node:process')
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    vue: true,
    typescript: {
      tsconfigPath: './tsconfig.json',
      overrides: {
        '@typescript-eslint/no-redeclare': 'off',
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
)
