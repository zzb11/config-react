const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const config = merge(common, {
  devtool: false,
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      }, 
      // {
      //   test: /\.(sass|scss|css)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'resolve-url-loader',
      //     'sass-loader?sourceMap',
      //   ],
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['./dist']),
    new ExtractTextPlugin({
      filename: `[name]_[md5:contenthash:hex:20].css`,// 给输出的 CSS 文件名称加上 Hash 值
    }),
    new UglifyJSPlugin(),
  ],
});

module.exports = config;
