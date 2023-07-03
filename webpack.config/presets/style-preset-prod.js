const stylePresetProd = () => {
  return {
    test: /\.(css|sass|scss)$/i,
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: false,
        },
      },
      'postcss-loader',
      'sass-loader',
    ],
  };
};

module.exports = stylePresetProd;
