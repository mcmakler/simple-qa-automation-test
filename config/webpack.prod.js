const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig, {
	output: {
		path: path.join(__dirname, '..', 'www'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
	},

	plugins: [
		new DedupePlugin(),
		new UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false,
			},
		}),
	],
});
