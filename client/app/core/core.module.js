import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-messages';
import 'angular-animate';
import 'angular-i18n/de-de';
import 'angular-material-data-table';
import BackendService from './backendService/backendService.module';
import * as CONSTANTS from './core.constants';

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
	BackendService.name,
]);
