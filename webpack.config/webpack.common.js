const path = require('./paths.js');
const multipage = require('./webpack.multipage.js');

const pugPlugin = require('./plugins/pug-plugin-module.js');

const htmlPreset = require('./presets/html-preset-common.js');
const stylePreset = require('./presets/style-preset-common.js');
const stylePresetProd = require('./presets/style-preset-prod.js');
const scriptPreset = require('./presets/script-preset-common.js');
const imagePreset = require('./presets/image-preset-common.js');
const fontPreset = require('./presets/font-preset-common.js');

const devMode = process.env.BUILD_TYPE !== 'production';

module.exports = {
  entry: {
    ...multipage.entry,
  },
  output: {
    path: path.build,
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      Images: path.src + '/img/',
      Fonts: path.src + '/fonts/',
    },
  },
  plugins: [
    pugPlugin(devMode),
  ],
  module: {
    rules: [
      htmlPreset(),
      devMode ? stylePreset() : stylePresetProd(),
      scriptPreset(),
      imagePreset(devMode),
      fontPreset(devMode),
    ],
  },
};
