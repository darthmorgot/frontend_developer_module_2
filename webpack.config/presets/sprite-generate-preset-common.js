const path = require('../paths.js');
const pathApp = require('node:path');

const spriteGeneratePreset = () => {
  return {
    test: /\.svg$/i,
    // include: path.src + '/img/icons/',
    // include: pathApp.resolve(__dirname, 'source/img/icons/'),
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          // extract: true,
          spriteFilename: 'assets/img/test.svg',
          symbolId: '[name]',
        },
      },
      // 'svgo-loader'
    ]
  };
};

module.exports = spriteGeneratePreset;
