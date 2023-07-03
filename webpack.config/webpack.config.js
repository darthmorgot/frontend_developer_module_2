const commonConfig = require('./webpack.common.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = () => {
  switch (process.env.BUILD_TYPE) {
    case 'development':
      return {
        ...commonConfig,
        ...devConfig,
      };
    case 'production':
      return {
        ...commonConfig,
        ...prodConfig,
      };
    default:
      throw new Error('No matching configuration was found');
  }
};
