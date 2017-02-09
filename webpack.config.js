switch (process.env.WEBPACK_CONFIG_MODE) {
	case 'CLIENT_BUILD':
		module.exports = require('./config/webpack.prod');
		break;

	default:
		module.exports = require('./config/webpack.dev');
}
