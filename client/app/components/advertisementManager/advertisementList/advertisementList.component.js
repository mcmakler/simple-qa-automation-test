import template from './advertisementList.html';
import './_advertisementList.scss';

class AdvertisementListController {
	constructor($state, socket) {
		'ngInject';

		this.name = 'advertisementList';
		this.$state = $state;

		socket.on('add:advertisement', () => {
			console.log('advertisement added');
		});
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

