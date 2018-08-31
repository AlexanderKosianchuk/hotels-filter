'use strict';

const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './index'
  ],
  context: resolve(__dirname, 'src'),
  output: {
    filename: 'bundle-[hash:6].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      resolve('./src'),
      resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
  module: {
    unknownContextCritical: false,
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?name=[name]-[hash:6].css']
      }, {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            query: {
              sourceMaps: false
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ],
      }, {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        loader:'file-loader?name=images/[name].[ext]'
      }, {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader:'file-loader?name=fonts/[name].[ext]'
      }, {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports-loader?jQuery=jquery'
      }, {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: { minimize: true }
        }]
      }, {
        test: /\.htaccess$/,
        loader: 'file-loader?name=.htaccess'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash:6].css',
      chunkFilename: '[id]-[hash:6].css'
    })
  ],
};
