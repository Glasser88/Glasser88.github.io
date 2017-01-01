const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');

require('es6-promise').polyfill();

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/__build__`,
    filename: 'bundle.js'
  },

  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
    }, {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: "file-loader"
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
        })
      ];
    }
    return [];
  })(),
};

module.exports = validate(config);
