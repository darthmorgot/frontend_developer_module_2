const pugPlugin = require('pug-plugin');

const htmlPreset = () => {
  return {
    test: /\.pug$/,
    loader: pugPlugin.loader,
  };
};

module.exports = htmlPreset;
