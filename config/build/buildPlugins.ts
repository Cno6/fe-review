import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { WebpackPluginInstance } from 'webpack'
import { DefinePlugin, ProgressPlugin } from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      __IS_DEV__: isDev,
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ]

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }))
  }

  return plugins
}
