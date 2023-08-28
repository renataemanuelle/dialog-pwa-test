const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'eval-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(t|j)s(|x)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
    },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') 
    }),
    ...(isProduction ? [new InjectManifest({
      swSrc: './src/service-worker.js',
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    })] : []),
  ],
  devServer: {
    static: [
      { directory: path.join(__dirname, 'public') },
      { directory: path.join(__dirname, 'dist') }
  ],
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
};
