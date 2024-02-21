import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      /** 
       * Файлы .vue, которые мы будем использовать, 
       * требуют компиляции/трансформации во время выполнения,
       * поэтому нам нужно псевдоним vue для его runtime bundler.
       * @url https://james.pawsforthorpe.co.uk/posts/2022/02/webpack-typescript-vue.html
      */
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': paths.src
    }
  }
}
