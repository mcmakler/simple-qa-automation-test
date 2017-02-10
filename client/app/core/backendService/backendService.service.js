/**
 * @ngdoc service
 * @name backendService.service:BackendService
 *
 * @description
 *
 */
class BackendService {
	constructor($http) {
		'ngInject';
		this.$http = $http;
		this.baseUri = 'api';
	}
	/**
	 * @ngdoc method
	 * @name backendService.service:BackendService#getAdvertisements
	 * @methodOf backendService.service:BackendService
	 *
	 * @description
	 * Get all advertisements
	 *
	 * @returns {Promise} an $http promise Object resolving an Array containing advertisement results
	 */
	getAdvertisements() {
		return this.$http({
			method: 'GET',
			url: `${this.baseUri}/advertisements`,
		});
	}

	getAdvertisement(advertisementId) {
		return this.$http({
			method: 'GET',
			url: `${this.baseUri}/advertisements/${advertisementId}`,
		});
	}

	saveAdvertisement(advertisement) {
		console.log(advertisement);
		const method = advertisement._id ? 'PUT' : 'POST',
			url = `${this.baseUri}/advertisements${advertisement._id ? '/' + advertisement._id : ''}`;

		return this.$http({
			method,
			url,
			data: advertisement,
		});
	}
}

export default BackendService;

