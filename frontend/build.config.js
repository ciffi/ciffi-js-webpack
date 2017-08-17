const webpack = require('webpack');
const ConfigFile = require(__dirname + '/.ciffisettings');
const path = require('path');

module.exports = {
	entry: {
		main: './' + ConfigFile.srcPathName + '/scripts/main.js'
	},
	output: {
		path: __dirname + '/' + ConfigFile.assetsPath,
		publicPath: ConfigFile.assetsPath + '/',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: __dirname + '/' + './node_modules',
				options: {
					configFile: './.eslintrc'
				}
			}, {
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}, {
				test: /\.twig$/,
				loader: 'twig-loader'
			}
		]
	},
	resolve: {
		alias: {
			Config: path.resolve(__dirname, ConfigFile.srcPathName + '/scripts/config/config.js'),
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false
		})
	]
};