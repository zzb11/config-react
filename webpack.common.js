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
  watch: true,
  // 监听模式运行时的参数
  // 在开启监听模式时，才有意义
  watchOptions: {
    // 不监听的文件或文件夹，支持正则匹配
    // 默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    // 默认每秒问 1000 次
    poll: 1000
  },
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
