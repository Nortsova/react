import Webpack from 'webpack';
import path from 'path';
import config from './config.json';

const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

const {
  hotLoader: {
    host: hotHost,
    port: hotPort,
  },
} = config;

export default {
  devtool: 'source-map',
  entry: [
    `webpack-dev-server/client?http://${hotHost}:${hotPort}`,
    'webpack/hot/dev-server',
    path.join(__dirname, './src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: [
    HotModuleReplacementPlugin,
  ],
};
