'use strict';
let webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/public/scripts/main.es6`,
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.es6/, loader: 'babel-loader' },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.html/, loader: 'ractive' }
    ]
  }
};
