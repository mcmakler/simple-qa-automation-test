import template from './advertisementDetails.html';

class AdvertisementDetailsController {
	constructor($state, $mdDialog, $mdToast, BackendService) {
		'ngInject';

		this.$state = $state;
		this.$mdDialog = $mdDialog;
		this.BackendService = BackendService;
		this.$mdToast = $mdToast;

		this.name = 'advertisementDetails';
	}

	$postLink() {
		// Validate after child form is initialized.
		this.validateAdvertisementDetails();
	}

	initAdvertisementForm(advertisementForm) {
		this.advertisementForm = advertisementForm;
	}

	advertisementFormChange(advertisementForm) {
		this.validateAdvertisementDetails();
	}

	validateAdvertisementDetails() {
		this.disableSave = (!this.advertisementForm.$valid) || (this.advertisementForm.$pristine);
	}

	cancel() {
		if (this.advertisementForm.$pristine) {
			this.$state.go('advertisementList');
			return;
		}
		this.showConfirmOnCancel()
			.then(() => {
				this.$state.go('advertisementList');
			})
			.catch(() => {
			});
	}

	serializeAdvertisementDetails(advertisementDetails) {
		this.BackendService
			.saveAdvertisement(advertisementDetails)
			.then((response) => {
				this.showToastSuccess();
				this.$state.go('advertisementList');
			})
			.finally(() => {
				this.disableSave = false;
			});
	}

	saveAdvertisementDetails() {
		this.disableSave = true;
		this.serializeAdvertisementDetails(this.advertisement);
	}

	showConfirmOnCancel() {
		const confirm = this.$mdDialog
			.confirm()
			.title('Confirm')
			.textContent('Unsaved changes will be lost')
			.ok('ok')
			.cancel('cancel');

		return this.$mdDialog.show(confirm);
	}

	showToastSuccess(
		description = 'Saved successfully'
	) {
		return this.$mdToast.show(
			this.$mdToast
				.simple()
				.textContent(description)
				.position('top right')
				.theme('success-toast')
				.hideDelay(2000)
		);
	}
}


export const AdvertisementDetails = {
	template,
	controller: AdvertisementDetailsController,
	bindings: {
		advertisement: '<',
	},
};
