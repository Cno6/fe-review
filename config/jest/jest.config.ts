/** @type {import('ts-jest').JestConfigWithTsJest} */

import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@vue/test-utils': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
}

export default config
