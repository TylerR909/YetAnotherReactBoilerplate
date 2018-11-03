const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

const srcPath = pth => path.resolve(__dirname, `src/${pth}`)

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      components: srcPath('components'),
      services: srcPath('services'),
      state: srcPath('state'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],

  devServer: {
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-eval-source-map',
}
