import template from './app.html';
/**
 * @ngdoc component
 * @name _app.component:appDirective
 * @scope
 * @restrict E
 *
 * @description
 *  The root component for the application
 *
 * @usage
 * <app></app>
 *
 */
export const AppComponent = {
	restrict: 'E',
	template: template,
	replace: true,
};


