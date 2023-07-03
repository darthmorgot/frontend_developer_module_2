const stylePreset = () => {
  return {
    test: /\.(css|sass|scss)$/i,
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  browsers: 'last 2 versions',
                  stage: 4,
                },
              ]
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  };
};

module.exports = stylePreset;
