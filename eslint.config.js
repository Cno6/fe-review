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
      'no-console': __IS_DEV__ ? 'warn' : 'error',
      'no-debugger': __IS_DEV__ ? 'warn' : 'error',
    },
  },
)
