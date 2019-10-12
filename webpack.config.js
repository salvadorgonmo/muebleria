const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: ['@babel/polyfill', './client/src/index.js'],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'index_bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
}
