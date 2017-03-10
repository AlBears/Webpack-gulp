var path = require('path');

function config() {
  return {
    entry: {
      application: "./src/scripts/application",
      contact: './src/scripts/contact'
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
          loaders: ['babel-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.less$/,
          loaders: ['style-loader', 'css-loader', 'less-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
          loaders: 'url-loader?limit=5000',
          exclude: '/node_modules/'
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
          exclude: '/node_modules/'
        }
      ]
    }
  };
}

module.exports = config();
