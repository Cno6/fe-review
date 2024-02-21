import HtmlWebpackPlugin from "html-webpack-plugin";
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    })
  ]
}
