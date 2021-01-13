const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const buildPath = path.resolve(__dirname, '../dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');
module.exports = {
  mode: 'production',
  // context:path.resolve(__dirname, '../src'), // 解析起点
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'moment'],
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: buildPath, // 输出文件存放在本地的目录
    publicPath: './dist', // 配置发布到线上资源的 URL 前缀
    chunkFilename: 'js/[name].[hash].js', // 无入口的chunk在输出时的文件名称
    filename: 'js/[name].[hash].js'
  },
  resolve: { // 配置 Webpack 如何寻找模块所对应的文件
    extensions: ['.js', '.jsx', '.scss', '.css', '.json'], // 用于配置在尝试过程中用到的后缀列表
    alias: { // 别名
      '@': path.resolve(__dirname, '../src'),
      'public': path.resolve(__dirname, '../public'),
      'components': path.resolve(__dirname, '../src/components/'),
      'pages': path.resolve(__dirname, '../src/pages/'),
      'layout': path.resolve(__dirname, '../src/layout/')
    }
  },
  externals: {
    'FRONT_CONF': 'FRONT_CONF'
  },
  module: {
    rules: [{ // 配置模块的读取和解析规则，通常用来配置 Loader
      test: /\.js|jsx$/,
      exclude: /node_modules/, // exclude不包括，include只命中
      use: ['babel-loader?cacheDirectory'],
    },
    {
      test: /\.(less|css)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ],
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        'style-loader', //上面的简写方式
        'css-loader',
        'sass-loader',
        '@alifd/next-theme-loader?{"theme":"@alifd/theme-4"}'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
      // include
      use: [
        // 'file-loader?name=[name].[ext]',
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'dist/images/'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            // bypassOnDebug: true,
            disable: true
          }
        }
      ]
    },
    ]
  },
  performance: {
    hints: false,
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    noEmitOnErrors: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      minSize: 30000,
      maxSize: 3000000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor'
        },
        echarts: {
          chunks: 'all',
          name: 'echarts',
          test: /[\\/]echarts[\\/]/,
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: false,
      chunksSortMode: 'none',
      title: 'DEV | YUWAN',
      assets: {
        favicon: './dist/images/favicon.ico',
        config_js: './dist/config/conf.dev.js'
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../public/constants'), to: 'constants' },
        { from: path.resolve(__dirname, '../public/images'), to: 'images' },
        { from: path.resolve(__dirname, '../public/config'), to: 'config' },
        { from: path.resolve(__dirname, '../public/fonts'), to: 'fonts' },
      ]
    }),
    new ThemePlugin({ theme: '@alifd/theme-4' }),
    new webpack.DefinePlugin({
      __PRODUCTION: JSON.stringify(true)
    }),
  ]
};

