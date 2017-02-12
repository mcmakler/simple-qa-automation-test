import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-messages';
import 'angular-animate';
import 'angular-i18n/de-de';
import 'angular-material-data-table';
import io from 'socket.io-client';
import 'angular-socket-io';
import BackendService from './backendService/backendService.module';

/**
 * @ngdoc overview
 * @name _core
 *
 * @description
 *  The core application module, contents of this module are available to the whole app
 */
export const coreModule = angular.module('app.core', [
	// Angular modules
	'ui.router',
	'ngMaterial',
	'ngMessages',
	'md.data.table',
	'btford.socket-io',

	BackendService.name,
])
	.factory('socket', (socketFactory) => {
		return socketFactory({
			ioSocket: io('http://localhost:3000'),
		});
	});
