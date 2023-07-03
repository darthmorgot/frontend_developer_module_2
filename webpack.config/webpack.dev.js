const path = require('./paths.js');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8080,
    static: {
      directory: path.build,
    },
    hot: true,
    open: {
      app: {
        name: 'chrome',
      },
    },
    watchFiles: ['source/**/*'],
    historyApiFallback: true,
    compress: true,
  },
  cache: true,
};
