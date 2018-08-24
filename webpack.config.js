const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = ({ production = false } = {}) => ({
  entry: './src/index.ts',
  mode: production ? 'production' : 'development',
  devtool: !production && 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['lib'])
  ],
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'get-height.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'getHeight',
    libraryTarget: 'umd'
  }
})
