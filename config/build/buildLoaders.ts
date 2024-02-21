import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
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
    use: [
      // Creates `style` nodes from JS strings
      'vue-style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  return [
    tsLoader,
    vueLoader,
    styleLoader
  ]
}
