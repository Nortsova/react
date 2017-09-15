var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')


module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new NpmInstallPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loaders: ['eslint-loader'],
				include: [
					path.resolve(__dirname, 'src'),
				],
			},
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: [
					{ loader: 'react-hot-loader' },
					{
						loader: 'babel-loader',
						options: {
							plugins: [ 'transform-runtime' ]
						}
					}
				]
			},
			{
				test:   /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			}
		]
	},
}