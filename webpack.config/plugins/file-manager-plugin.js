const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('../paths');

const fileManagerPlugin = (mode) => {
  return new FileManagerPlugin({
    events: {
      onEnd: {
        copy: [
          {
            source: path.build + '/assets/img/*.webp',
            destination: mode ? path.src + '/img/generated-webp' : path.src + '/img/delete',
          },
        ],
        delete: [
          path.build + '/assets/img/pink-favicon-32.webp',
          path.src + '/img/generated-webp/pink-favicon-32.webp',
          path.src + '/img/delete/',
        ],
      },
    },
  });
};

module.exports = fileManagerPlugin;
