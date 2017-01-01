const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');

require('es6-promise').polyfill();


const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

const config = {
  entry: './src/index.js',
  output: {
    filename: 'index.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js[x]?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
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

  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  },
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(config, {
    devtool: '#source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: 'http://localhost:8090/assets'
    },
    plugins: [
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(config, {
    devtool: 'source-map',
    output: {
      path: `./dist`,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Trevor Glass',
        template: 'index-template.ejs'
      }),
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     NODE_ENV: JSON.stringify('production'),
      //   },
      // }),
      // new webpack.NoErrorsPlugin(),
      // new webpack.optimize.OccurenceOrderPlugin(),
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin()
    ]
  });
}

// module.exports = validate(config);
