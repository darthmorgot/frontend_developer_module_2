const scriptPreset = () => {
  return {
    test: /\.m?js$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: 'defaults'
            }
          ]
        ]
      },
    },
  };
};

module.exports = scriptPreset;
