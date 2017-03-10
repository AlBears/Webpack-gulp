"use strict"

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    webpackDevServer = require('webpack-dev-server'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function runWebpack(config, callback) {
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({
      colors: true,
      exclude: ["node_modules", "bower_components", "jam", "components"]
    }));

    callback();
  });
}

gulp.task('dev', callback => runWebpack(createDevConfig(), callback));

gulp.task('prod', callback => runWebpack(createProdConfig(), callback));

gulp.task('dev:watch', () => {
  const config = createDevConfig();


  config.output.publicPath = "http://localhost:8081/";
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  for (let entryName in config.entry) {
    if (!config.entry.hasOwnProperty(entryName))
      continue;

    let entryItems = config.entry[entryName];
    if (typeof (entryItems) === "string")
      entryItems = config.entry[entryName] = [entryItems];
    entryItems.splice(0, 0, "webpack-dev-server/client", "webpack/hot/only-dev-server");
  }

  const compiler = webpack(config);
  const devServer = new webpackDevServer(compiler, {
    hot: true,
    inline: true,
    stats: {
      colors: true,
      exclude: ["node_modules", "bower_components", "jam", "components"]
    }
  });

  devServer.listen(8081, 'localhost', () => {
    console.log('Dev server started');
  })
});

function createDevConfig() {

  const config = Object.assign({}, webpackConfig);
  config.devtool = "eval-source-map";
  config.plugins.push(new webpack.DefinePlugin({
    env: '"dev"'
  }))
  return config;
}

function createProdConfig() {
  const config = Object.assign({}, webpackConfig);
  config.devtool = "source-map";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new webpack.DefinePlugin({
    env: '"prod"'
  }));
  config.plugins.push(new ExtractTextPlugin("[name].css"));
  config.module.loaders[1].loader = ExtractTextPlugin.extract({
    loader: ['css-loader', 'less-loader']
  });
  config.module.loaders[2].loader = ExtractTextPlugin.extract({
    loader: 'css-loader'
  });
  return config;
}
