const fontPreset = (mode) => {
  return {
    test: /\.(woff(2)?|ttf|otf|eot)$/i,
    type: 'asset/resource',
    generator: {
      filename: mode ? 'assets/fonts/[name][ext]' : 'assets/fonts/[name].[hash:8][ext]',
    },
  };
};

module.exports = fontPreset;
