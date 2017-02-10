
/**
 * @ngdoc overview
 * @name _app
 *
 * @description
 * 	The root application route
 *
 */
export const appConfig = function(
	$urlRouterProvider,
	$locationProvider,
	$mdThemingProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider
		.when('', '/advertisements')
		.otherwise('/advertisements');

	$mdThemingProvider.theme('default')
		.primaryPalette('amber');
};
