import Advertisement from './Advertisement';

const advertisementManagerConfig = ($stateProvider) => {

	$stateProvider
		.state('advertisementDetails', {
			url: '/advertisement',
			abstract: true,
		})

		// Add advertisement
		.state('advertisementDetails.new', {
			url: '/new',
			title: 'Add advertisement',
			views: {
				'@': {
					template: `
						<advertisement-details
							flex
							layout="column"
							advertisement="$ctrl.advertisement"
							is-edit="$ctrl.isEdit"
						>
						</advertisement-details>
					`,
					controller: function() {
						'ngInject';

						this.advertisement = new Advertisement();
						this.isEdit = false;
					},
					controllerAs: '$ctrl',
				},
			},
		})

		// Edit advertisement
		.state('advertisementDetails.edit', {
			url: '/:id/edit',
			title: 'Edit Advertisement',
			views: {
				'@': {
					template: `
						<advertisement-details
							flex
							layout="column"
							advertisement="$ctrl.advertisement"
							is-edit="$ctrl.isEdit"
						>
						</advertisement-details>
					`,
					controller: function(advertisement) {
						'ngInject';

						this.advertisement = new Advertisement(advertisement);
						this.isEdit = true;
					},
					controllerAs: '$ctrl',
				},
			},
			resolve: {
				advertisement: function(BackendService, $stateParams) {
					'ngInject';

					return BackendService
						.getAdvertisement($stateParams.id)
						.then(response => response.data)
						.catch((err) => {
							console.log(`something went wrong`);
						});
				},
			},
		})

		// List Advertisements
		.state('advertisementList', {
			resolve: {
				advertisements: function(BackendService) {
					'ngInject';

					return BackendService
						.getAdvertisements()
						.then(response => response.data)
						.catch((err) => {
							console.log(`error occured: ${err}`);
						});
				},
			},
			url: '/advertisements',
			title: 'Advertisements',
			template: `
					<advertisement-list
						flex
						layout="column"
						advertisements="$ctrl.advertisements"
					></advertisement-list>
				`,
			controller: function(advertisements) {
				'ngInject';

				this.advertisements = advertisements.map((advertisement) => new Advertisement(advertisement));
			},
			controllerAs: '$ctrl',
		});
};

export default advertisementManagerConfig;
