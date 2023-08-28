const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    ...(isProduction ? [new InjectManifest({
      swSrc: './src/service-worker.js',
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    })] : []),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3000
  }
};
