const path = require('./paths.js');
const multipage = require('./webpack.multipage.js');

const pugPlugin = require('./plugins/pug-plugin-module.js');
const fileManagerPlugin = require('./plugins/file-manager-plugin.js');

const htmlPreset = require('./presets/html-preset-common.js');
const stylePreset = require('./presets/style-preset-common.js');
const stylePresetProd = require('./presets/style-preset-prod.js');
const scriptPreset = require('./presets/script-preset-common.js');
const imagePreset = require('./presets/image-preset-common.js');
const fontPreset = require('./presets/font-preset-common.js');

const spriteGeneratePreset = require('./presets/sprite-generate-preset-common.js');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ImageWebpPlugin = require('imagemin-webp-webpack-plugin');

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
    preferRelative: true,
  },
  plugins: [
    pugPlugin(devMode),
    fileManagerPlugin(devMode),
    // new SpriteLoaderPlugin(),
    devMode ? new ImageWebpPlugin() : null,
  ],
  module: {
    rules: [
      htmlPreset(),
      devMode ? stylePreset() : stylePresetProd(),
      scriptPreset(),
      imagePreset(devMode),
      fontPreset(devMode),
      // spriteGeneratePreset(),
    ],
  },
};
