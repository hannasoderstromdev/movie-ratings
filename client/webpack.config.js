const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const keys = require('../config/keys')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/static/'),
    proxy: {
      '/users/authenticate': keys.ROOT_URL,
      '/search': keys.ROOT_URL,
      '/movies': keys.ROOT_URL,
      '/movies/create': keys.ROOT_URL,
      '/movies/latest': keys.ROOT_URL,
      '/genres': keys.ROOT_URL,
    },
    hot: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      reducers: path.resolve(__dirname, './src/reducers'),
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build/static/'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
