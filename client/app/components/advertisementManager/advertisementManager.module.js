import angular from 'angular';
import config from './advertisementManager.config';

import { AdvertisementList } from './advertisementList/advertisementList.component';
import { AdvertisementDetails } from './advertisementDetails/advertisementDetails.component';
import { AdvertisementForm } from './advertisementDetails/advertisementForm/advertisementForm.component';

export const advertisementManager = angular.module('advertisementManager', [])
	.config(config)
	.component('advertisementList', AdvertisementList)
	.component('advertisementDetails', AdvertisementDetails)
	.component('advertisementForm', AdvertisementForm);


