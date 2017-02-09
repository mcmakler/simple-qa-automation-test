
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
	$locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider
		.when('', '/')
		.otherwise('/');
};
