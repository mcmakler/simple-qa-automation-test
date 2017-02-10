import { AppDirective as directive } from '../app.component';
import template from '../app.html';

describe('Component: App', function() {
	it('includes the intended template', () => {
		expect(directive().template).toEqual(template);
	});
});
