export const userIdInterceptor = function($httpProvider) {
	'ngInject';

	// Push Auth Interceptor
	$httpProvider.interceptors.push(($q, $window) => {

		return {
			request: function(config) {
				config.headers.userId = $window.sessionStorage.getItem('socket:userId');

				return config;
			},
		};
	});
};

