import template from './advertisementForm.html';
import './_advertisementForm.scss';

class AdvertisementFormController {
	constructor() {
		'ngInject';

		this.name = 'advertisementForm';
	}

	$postLink() {
		// Form is ready, so call output to initialize
		this.onInit({
			advertisementForm: this.advertisementForm,
		});
	}

	advertisementFormChange() {
		this.onChange({
			advertisementForm: this.advertisementForm,
		});
	}
}


export const AdvertisementForm = {
	template,
	controller: AdvertisementFormController,
	bindings: {
		onInit: '&',
		onChange: '&',
		advertisement: '<',
	},
};
