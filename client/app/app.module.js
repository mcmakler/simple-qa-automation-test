import angular from 'angular';
import { coreModule } from './core/core.module';

// Components
import { headerBar } from './components/headerBar/headerBar.module';
import { advertisementManager } from './components/advertisementManager/advertisementManager.module';

// Construct Module
import { AppDirective } from './app.component';
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
	headerBar.name,
	advertisementManager.name,
])
	.directive('app', AppDirective)
	.config(config);

export default appModule;
