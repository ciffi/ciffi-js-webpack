const ConfigFile = require(__dirname + '/.ciffisettings');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const _indexUrl = ConfigFile.devStartUrl;
const path = require('path');

module.exports = {
	entry: {
		main: './' + ConfigFile.srcPathName + '/scripts/main.js'
	},
	output: {
		publicPath: ConfigFile.assetsPath + '/',
		path: __dirname + '/' + ConfigFile.assetsPath,
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	devtool: 'source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
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
		new OpenBrowserPlugin({
			url: _indexUrl
		})
	]
};