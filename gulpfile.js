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
  return config;
}
