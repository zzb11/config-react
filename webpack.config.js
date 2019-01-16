const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:[
          'babel-loader',
          'eslint-loader'
        ],
      },{
        test: /\.(sass|scss|css)/,
        use: [
        "style-loader",
        "css-loader",
        "resolve-url-loader",
        "sass-loader?sourceMap"
        ]
      }
    ]
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;