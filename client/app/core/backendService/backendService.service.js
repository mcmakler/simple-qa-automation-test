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
	 * Search address using google geocode api.
	 *
	 * @returns {Promise} an $http promise Object resolving an Object containing search results
	 */
	getAdvertisements() {
		return this.$http({
			method: 'GET',
			url: `${this.baseUri}/advertisements`,
		});
	}
}

export default BackendService;

