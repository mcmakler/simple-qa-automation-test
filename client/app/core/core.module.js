import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
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
	'ngAnimate',
])
	.constant('LANGUAGES', CONSTANTS.LANGUAGES)
	.constant('DEFAULT_LANGUAGE', CONSTANTS.DEFAULT_LANGUAGE);
