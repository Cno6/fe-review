import path from 'node:path'
import type { RuleSetRule } from 'webpack'
import type { BuildOptions } from './types/config'
import buildStyleLoader from './loaders/style-loader'

export function buildLoaders({ isDev, paths }: BuildOptions): RuleSetRule[] {
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      /**
       * Используется для указания шаблона регулярного выражения,
       * который сопоставляет пути к файлам,
       * где файлы TypeScript (`.ts` или `.tsx`)
       * должны рассматриваться так, как будто они имеют расширение `.vue`.
       * Это полезно при работе с однофайловым форматом компонентов `.vue`
       * в проекте TypeScript.
       */
      appendTsSuffixTo: [/\.vue$/],
    },
  }

  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
  }

  const styleLoader = buildStyleLoader(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: [
      'vue-loader',
      path.resolve(paths.customLoaders, 'vue-svg-loader.ts'),
    ],
  }

  return [
    svgLoader,
    tsLoader,
    vueLoader,
    styleLoader,
  ]
}
