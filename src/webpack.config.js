const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'js/app/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/js')
  }
};