const imagePreset = (mode) => {
  return {
    test: /\.(png|svg|jpeg|jpg|gif|ico|webp)$/i,
    type: 'asset/resource',
    generator: {
      filename: mode ? 'assets/img/[name][ext]' : 'assets/img/[name].[hash:8][ext]',
    },
  };
};

module.exports = imagePreset;
