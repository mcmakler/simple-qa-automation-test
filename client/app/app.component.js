import template from './app.html';
import './_app.scss';
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
export const AppDirective = function() {
	return {
		restrict: 'E',
		template: template,
		replace: true,
	};
};

