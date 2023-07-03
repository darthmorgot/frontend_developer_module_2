const pathApp = require('node:path');
const path = require('../paths.js');

const PugPlugin = require('pug-plugin');

const keepPugFolderStructure = (pathData) => {
  const sourceFile = pathData.filename;
  const relativeFile = pathApp.relative(path.src, sourceFile);
  const {dir, name} = pathApp.parse(relativeFile);

  if (name === 'index') {
    return `${name}.html`;
  } else {
    return `${dir}/${name}.html`;
  }
};

const pugPlugin = (mode) => {
  return new PugPlugin({
    pretty: mode,
    js: {
      filename: mode ? 'assets/js/[name].js' : 'assets/js/[name].[contenthash:8].js',
    },
    css: {
      filename: mode ? 'assets/css/[name].css' : 'assets/css/[name].[contenthash:8].css',
    },
    filename: keepPugFolderStructure,
  });
};

module.exports = pugPlugin;
