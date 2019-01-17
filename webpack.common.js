const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: '[name].bundle-[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: [
  //         'babel-loader',
  //         'eslint-loader',
  //       ],
  //     }, {
  //       test: /\.(sass|scss|css)$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'resolve-url-loader',
  //         'sass-loader?sourceMap',
  //       ],
  //     },
  //     {
  //       test: /\.(png|jpg|svg|gif)$/,
  //       use: [
  //         'file-loader',
  //       ],
  //     },
  //   ],
  // },
  // devtool: 'inline-source-map',
  // mode: 'development',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
  plugins: [
    // new webpack.LoaderOptionsPlugin({ options: {} }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new CleanWebpackPlugin(['dist']),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;