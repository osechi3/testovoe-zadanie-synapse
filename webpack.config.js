const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: path.resolve(__dirname, 'dist/assets/images')
        }
      ]
    })
  ]
}
