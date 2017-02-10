import template from './headerBar.html';
import './_headerBar.scss';

class HeaderBarController {
	constructor() {
		this.headerTitle = 'Advertisements';
	}
}

const headerBarComponent = {
	restrict: 'E',
	bindings: {},
	template,
	controller: HeaderBarController,
};

export default headerBarComponent;
