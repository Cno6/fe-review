import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildStyleLoader(isDev: boolean) {
  return {
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
                  : '[hash:base64:8]',
              },
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
      },
    ],
  }
}
