import angular from 'angular';
import { coreModule } from './core/core.module';

// Construct Module
import { AppComponent } from './app.component';
import { appConfig as config } from './app.config';

/**
 * @ngdoc overview
 * @name _app
 *
 * @description
 * 	The root application module
 */

const appModule = angular.module('app', [
	// Core
	coreModule.name,
])
	.component('app', AppComponent)
	.config(config);

export default appModule;
