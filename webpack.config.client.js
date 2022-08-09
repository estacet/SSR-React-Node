const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    client: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist/client'),
    filename: "static/js/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'static/css/styles.css'
    } ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin( {
      patterns: [
        {
          from: path.resolve( __dirname, 'src/assets' ),
          to: path.resolve( __dirname, 'dist/client/assets' )
        }
      ]
    } ),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    static: path.join(__dirname, "/dist"),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
};
