import { AppComponent as component } from '../app.component';
import template from '../app.html';

describe('Component: App', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});
});
