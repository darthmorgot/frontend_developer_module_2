const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: false,
  },
};
