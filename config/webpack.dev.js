const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',
	plugins: [
		new DashboardPlugin(),
	],
});
