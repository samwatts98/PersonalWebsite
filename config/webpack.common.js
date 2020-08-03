var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const html = new HtmlWebpackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
});

const copy = new CopyPlugin({
  patterns: [
    { from: 'public/robots.txt', to: 'robots.txt' }
  ]
});

const clean = new CleanWebpackPlugin();

module.exports = {
  target: 'web',

  entry: {
    app: path.join(__dirname, '..', 'src', 'index.tsx'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ["node_modules", path.resolve(__dirname, '..', 'src'), path.resolve(__dirname, '..', 'public')],
  },

  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [clean, html, copy],
};
