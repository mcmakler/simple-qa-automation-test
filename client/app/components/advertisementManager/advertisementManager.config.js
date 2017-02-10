import Advertisement from './Advertisement';

const advertisementManagerConfig = ($stateProvider) => {

	$stateProvider
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
