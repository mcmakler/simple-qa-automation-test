
/**
 * @ngdoc overview
 * @name bootstrap
 *
 * @description
 * Loads the application on to DOM
 */

import angular from 'angular';
import 'whatwg-fetch';
import appModule from './app.module';
import '../scss/main.scss';

class App {
	constructor() {
	}

	start() {
		angular
			.module('app.core');

		angular.bootstrap(document, [appModule.name]);
	}
}

if (window) {
	//Export app for browser
	window.App = new App();
}

angular
	.element(document)
	.ready(() => {
		window.App.start();
	});
