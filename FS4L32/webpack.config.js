const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.js',
  },
};