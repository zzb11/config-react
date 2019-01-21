const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


const config = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: '[name].bundle-[hash].js',
    path: path.join(__dirname, 'dist'),
    // publicPath:'/dist/'
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
    new webpack.DllReferencePlugin({
      // 描述 polyfill 动态链接库的文件内容
      manifest: require('./dist/vendor.manifest.json'),
    }),
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      uglifyJS: {
        output: {
          // 最紧凑的输出
          beautify: false,
          // 删除所有的注释
          comments: false,
        },
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告
          warnings: false,
          // 删除所有的 `console` 语句，可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
        }
      },
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dist/vendor.dll.js'),
    }),
    // new CleanWebpackPlugin(['dist']),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
