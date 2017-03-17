const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // extractCSS
      // {
      //   test: /\.scss$/,
      //   loader: extractCSS.extract(['css-loader', 'sass-loader'])
      // },
      // // url loader
      // {
      //   test: /\.(png|jpg|otf|ttf)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000
      //     } // Convert images < 10k to base64 strings
      //   }]
      // },
      // babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Vue: 'vue',
  //   })
  // ],
  // resolve: {
  //   modules: [
  //     'D:/WINDOWS/GD2/web/dev/_npm/libs/vue_2.1.10/node_modules'
  //   ]
  // }
};