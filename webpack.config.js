var path = require('path');
var webpack = require('webpack');
var reactHotPatch = require('react-hot-loader/patch');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    reactHotPatch, // RHL patch
    './scripts/index', // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
};
