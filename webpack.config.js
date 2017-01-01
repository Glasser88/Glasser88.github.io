const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');

// require('es6-promise').polyfill();

const javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
const htmlEntryPath = path.resolve(__dirname, 'index.html');
const buildPath = path.resolve(__dirname, 'public', 'build');

const config = {
  cache: true,
  debug: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    javascriptEntryPath,
    htmlEntryPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js[x]?$/,
      loaders: ['react-hot', 'babel-loader'],
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
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }]
  },

  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

// if (TARGET === 'dev' || !TARGET) {
//   module.exports = merge(config, {
//     devtool: '#source-map',
//     devServer: {
//       historyApiFallback: true
//     },
//     output: {
//       publicPath: 'http://localhost:8090/assets'
//     },
//     plugins: [
//       new NpmInstallPlugin({
//         save: true // --save
//       })
//     ]
//   });
// }
//
// if (TARGET === 'build') {
//   module.exports = merge(config, {
//     devtool: 'source-map',
//     output: {
//       path: `./dist`,
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         title: 'Trevor Glass',
//         template: 'index-template.ejs'
//       }),
//       // new webpack.DefinePlugin({
//       //   'process.env': {
//       //     NODE_ENV: JSON.stringify('production'),
//       //   },
//       // }),
//       // new webpack.NoErrorsPlugin(),
//       // new webpack.optimize.OccurenceOrderPlugin(),
//       // new webpack.optimize.DedupePlugin(),
//       // new webpack.optimize.UglifyJsPlugin()
//     ]
//   });
// }

module.exports = validate(config);
