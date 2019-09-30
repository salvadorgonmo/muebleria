const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: "index_bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
}
