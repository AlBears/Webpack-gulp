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
          use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
          test: /\.css$/,
          loaders: 'css-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)$/,
          loaders: 'url-loader?limit=5000',
          exclude: '/node_modules/'
        }
      ]
    }
  };
}

module.exports = config();
//module.exports.clone = config;
