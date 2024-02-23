import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from "./types/config";
import path from "path";

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
    }
  }

  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader'
  }

  const styleLoader = {
    test: /\.scss$/i,
    oneOf: [
      {
        resourceQuery: /module/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:8]'
              }
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }

  const svgLoader = {
    test: /\.svg$/,
    use: [
      'vue-loader',
      path.resolve(paths.customLoaders, 'vue-svg-loader.ts')
    ],
  }

  return [
    svgLoader,
    tsLoader,
    vueLoader,
    styleLoader
  ]
}
