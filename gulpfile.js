"use strict"

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    webpackDevServer = require('webpack-dev-server');

gulp.task('dev', callback => {
  const compiler = webpack(createDevConfig());
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
});

gulp.task('dev:watch', () => {
  const config = createDevConfig();

  config.output.publicPath = "http://localhost:8081/";

  const compiler = webpack(config);
  const devServer = new webpackDevServer(compiler, {
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
  return config;
}
