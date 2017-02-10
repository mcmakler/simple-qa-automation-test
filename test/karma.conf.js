const COVERAGE_ENABLED = !!process.env.COVERAGE_ENABLED;
const WATCH_MODE = !!process.env.WATCH_MODE;

let isPhantomJSInstalled = false;

try {
	require.resolve('karma-phantomjs-launcher');
	isPhantomJSInstalled = true;
} catch (e) {
	isPhantomJSInstalled = false;
}

module.exports = function(config) {
	const preloaders = [];

	if (COVERAGE_ENABLED) {
		// isparta not supported by webpack 2 yet.
		// preloaders.push({
		// 	enforce: 'pre',
		// 	test: [/\.js$/],
		// 	exclude: [/node_modules/, /spec\.js$/],
		// 	rules: ['isparta-loader'],
		// });
	}

	// ESLint should always lint the code.
	preloaders.push({
		enforce: 'pre',
		test: /\.js$/,
		include: /\.spec\.js/,
		use: ['eslint-loader'],
	});

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: ['spec.bundle.js'],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'spec.bundle.js': ['webpack', 'sourcemap'],
		},

		webpack: {
			devtool: 'inline-source-map',
			module: {
				rules: [...preloaders, {
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				}, {
					test: /\.json$/,
					use: 'json-loader',
				}, {
					test: /\.html$/,
					use: 'raw-loader',
				}, {
					test: /\.(jpe?g|png|eot|woff|ttf|gif|svg)(\?.*)?$/i,
					use: 'url-loader',
				}, {
					test: /\.css$|\.scss$/,
					use: ['raw-loader', 'sass-loader'],
				}],
			},
		},

		webpackMiddleware: {
			stats: true,
		},

		noResolve: false,

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: COVERAGE_ENABLED ? ['progress', 'coverage'] : ['progress'],

		coverageReporter: {
			reporters: [
				{ type: 'html' },
				{ type: 'text-summary' },
			],
			dir: 'coverage',
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: WATCH_MODE,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [isPhantomJSInstalled ? 'PhantomJS' : 'Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: !WATCH_MODE,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity,
	});
};
