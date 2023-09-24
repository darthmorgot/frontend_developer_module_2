const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              ['imagemin-svgo', {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              {xmlns: 'http://www.w3.org/2000/svg'},
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              }],
            ],
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
  },
};
