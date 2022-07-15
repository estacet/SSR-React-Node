const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: {
    client: path.resolve(__dirname, 'src', 'index.tsx'),
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
  output: {
    path: path.resolve(__dirname, './dist/client'),
    filename: "[name].js",
  },
  mode: "development",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: "tsconfig.client.json"
      }
    }),
    // extract css to external stylesheet file
    new MiniCssExtractPlugin( {
      filename: 'dist/styles.css'
    } ),
    new CleanWebpackPlugin(),
    // copy static files from `server` to `dist`
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
      
        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // name of chunk file
          test: /node_modules/, // test regular expression
        }
      }
    }
  },
  devServer: {
    static: path.join(__dirname, "/"),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
};
