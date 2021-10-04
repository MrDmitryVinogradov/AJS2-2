const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
      path: path.resolve('./dist'),
      filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
}
