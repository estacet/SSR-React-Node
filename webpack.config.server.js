const nodeExternals = require('webpack-node-externals');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'src/server/server.tsx'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/styles.css'
    } ),
    new CleanWebpackPlugin(),
  ]
}