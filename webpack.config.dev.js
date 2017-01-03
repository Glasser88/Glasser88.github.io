const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true,
  entry: [
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true,
    }),
  ],

  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }, {
      test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.ico$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
    }, {
      test: /\.json$/,
      loader: "json"
    }]
  },
  postcss: ()=> [autoprefixer]
};

// module.exports = validate(config);
