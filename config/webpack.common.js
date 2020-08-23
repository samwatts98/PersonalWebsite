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
    extensions: ['.ts', '.tsx', '.js', '.jpg'],
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
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50
              },
            },
          },
        ],
      },
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   loader: 'image-webpack-loader',
      //   // Specify enforce: 'pre' to apply the loader
      //   // before url-loader/svg-url-loader
      //   // and not duplicate it in rules with them
      //   enforce: 'pre'
      // }
    ],
  },

  plugins: [clean, html, copy],
};
