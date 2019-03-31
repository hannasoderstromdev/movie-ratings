const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const keys = require('../config/keys')

module.exports = env => {
  const isDevelopment = env === 'development'
  const isProduction = env === 'production'

  return {
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
      hot: isDevelopment,
    },
    devtool: isDevelopment ? 'inline-source-map' : false,
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      filename: isDevelopment
        ? 'static/js/bundle.js'
        : 'static/js/[name].[hash:8].js',
      chunkFilename: isDevelopment
        ? 'static/js/[name].chunk.js'
        : 'static/js/[name].[hash:8].chunk.js',
      devtoolModuleFilenameTemplate: isDevelopment
        ? info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
        : info =>
            path
              .relative(path.appSrc, info.absoluteResourcePath)
              .replace(/\\/g, '/'),
    },
    optimization: {
      minimize: isDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: { ecma: 8 },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: isDevelopment,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      runtimeChunk: true,
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        reducers: path.resolve(__dirname, './src/reducers'),
      },
    },
    module: {
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
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
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            template: './build/index.html',
            filename: './index.html',
          },
          isProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined,
        ),
      ),
      new BundleAnalyzerPlugin(),
      isDevelopment ? new webpack.HotModuleReplacementPlugin() : () => {},
    ],
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
  }
}
