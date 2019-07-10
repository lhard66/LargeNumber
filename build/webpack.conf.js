module.exports = {
  mode: 'none',
  entry: {
    'large-number': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber',
    libraryTarget: 'umd',
  },
}