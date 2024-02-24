import type { ResolveOptions } from 'webpack'
import type { BuildOptions } from './types/config'

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      /**
       * Файлы .vue, которые мы будем использовать,
       * требуют компиляции/трансформации во время выполнения,
       * поэтому нам нужно псевдоним vue для его runtime bundler.
       * @url https://james.pawsforthorpe.co.uk/posts/2022/02/webpack-typescript-vue.html
       */
      vue: 'vue/dist/vue.esm-bundler.js',
      // 'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js'
    },
  }
}
