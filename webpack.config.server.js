const nodeExternals = require('webpack-node-externals');
const path = require('path')

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'src/server/server.tsx'),
  },
  mode: 'production',
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
    ],
  },
}