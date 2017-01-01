const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;
console.log(`Target event is ${TARGET}`);

const config = {
  debug: true,
  devtool: 'eval-source-map',
  context: __dirname,
  entry: './src/index.js',

  output: {
    path: __dirname,
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
      test: /\.(js|jsx)$/,
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
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    // new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    }),
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true
    })
  ]
};

if (TARGET === 'build') {
  module.exports = merge(config, {
    devtool: 'source-map',
    output: {
      path: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Trevor Glass',
        template: 'index-template.ejs'
      })
    ]
  });
}

// module.exports = config;
