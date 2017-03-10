var path = require('path'),
    webpack = require('webpack');

function config() {
  return {
    entry: {
      application: "./src/scripts/application",
      contact: './src/scripts/contact',
      vendor: ['jquery', 'lodash', 'jquery-ui']
    },
    output: {
      path: path.join(__dirname, 'public/assets'),
      filename: '[name].js',
      publicPath: "/assets/"

    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: ['babel-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.less$/,
          loader: ['style-loader', 'css-loader', 'less-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
          loader: 'url-loader?limit=5000',
          exclude: '/node_modules/'
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name:"vendor",
        file: "vendor.js"
      })
    ]
  };
}

module.exports = config();
