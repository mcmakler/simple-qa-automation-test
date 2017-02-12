import template from './advertisementList.html';
import './_advertisementList.scss';

class AdvertisementListController {
	constructor($scope, $state, $mdToast, SocketService) {
		'ngInject';

		this.name = 'advertisementList';
		this.$state = $state;
		this.$mdToast = $mdToast;
		this.$scope = $scope;

		SocketService.socket.forward('add:advertisement', this.$scope);
		SocketService.socket.forward('edit:advertisement', this.$scope);

		this.$scope.$on('socket:add:advertisement', () => {
			this.showRefreshToast();
		});

		this.$scope.$on('socket:edit:advertisement', () => {
			this.showRefreshToast();
		});
	}

	rowClick(advertisement) {
		this.$state.go('advertisementDetails.edit', { id: advertisement._id });
	}

	showRefreshToast(
		description = 'List changed'
	) {
		return this.$mdToast.show(
			this.$mdToast
				.simple()
				.textContent(description)
				.action('Reload')
				.highlightAction(true)
				.position('top right')
				.theme('default')
				.hideDelay(0)
		)
			.then((response) => {
				if (response === 'ok') {
					this.$state.reload();
				}
			});
	}
}


export const AdvertisementList = {
	template,
	bindings: {
		advertisements: '<',
	},
	controller: AdvertisementListController,
};

