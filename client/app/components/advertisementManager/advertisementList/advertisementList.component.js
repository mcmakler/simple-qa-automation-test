import template from './advertisementList.html';
import './_advertisementList.scss';

class AdvertisementListController {
	constructor() {
		'ngInject';

		this.name = 'advertisementList';
	}
}


export const AdvertisementList = {
	template,
	controller: AdvertisementListController,
};

