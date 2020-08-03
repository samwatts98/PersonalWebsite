var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const terser = new TerserPlugin();

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [terser],
    splitChunks: {
      chunks: 'all',
    },
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: './',
  },
});
