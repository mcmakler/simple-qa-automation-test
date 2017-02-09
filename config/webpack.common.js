const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const backendServerUrl = process.env.BACKEND_SERVER_URL || '';
const proxy = {
	'/api/**/*': {
		target: backendServerUrl,
		pathRewrite: {'^/api': ''},
	},
};

module.exports = {
	entry: [
		path.join(__dirname, '../client/app/bootstrap.js'),
	],
	output: {
		path: path.join(__dirname, '..', 'www'),
		filename: '[name].[hash].js',
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'www'),
		port: 9001,
		proxy,
		inline: true,
	},
	plugins: [
		new SassLintPlugin({
			glob: 'client/**/*.scss',
		}),
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
		}),
		new HtmlWebpackPlugin({
			template: 'client/index.html',
			hash: false,
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			},
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				// Don't include things under '/client' folder
				return module.resource && module.resource.indexOf(path.resolve(__dirname, '..', 'client')) === -1;
			},
		}),
		new CopyWebpackPlugin([
			{ from: 'client/assets', to: 'assets' },
		]),
	],
	module: {
		rules: [
			{ test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader'], exclude: /node_modules/ },
			{ test: /\.css$|\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', query: {sourceMap: true, importLoaders: 1}},
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader', query: {sourceMap: true}},
					],
				}),
			},
			{ test: /\.html$/, use: 'raw-loader' },
			{ test: /\.json$/, use: 'json-loader' },
			{ test: /\.(png|jpg)$/, use: { loader: 'url-loader', query: { limit: 8192 }}},
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'url-loader', query: { limit: 10000, mimeType: 'application/font-woff'}}},
			{ test: /\.woff2$/, use: { loader: 'url-loader', query: { limit: 10000, mimeType: 'application/font-woff'}}},
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'url-loader', query: { limit: 10000, mimeType: 'application/octet-stream'}}},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'file-loader'}},
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: { loader: 'url-loader', query: { limit: 10000, mimeType: 'image/svg+xml'}}},
		],
	},
};
