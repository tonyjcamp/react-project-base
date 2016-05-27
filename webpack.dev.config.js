var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'eval',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.(js|jsx|babel)$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
   extensions: ['', '.js', '.es6']
 }
}

module.exports = config