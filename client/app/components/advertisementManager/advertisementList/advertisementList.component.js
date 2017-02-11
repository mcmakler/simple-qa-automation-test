import template from './advertisementList.html';
import './_advertisementList.scss';

class AdvertisementListController {
	constructor($state) {
		'ngInject';

		this.name = 'advertisementList';
		this.$state = $state;
	}

	rowClick(advertisement) {
		this.$state.go('advertisementDetails.edit', { id: advertisement._id });
	}
}


export const AdvertisementList = {
	template,
	bindings: {
		advertisements: '<',
	},
	controller: AdvertisementListController,
};

