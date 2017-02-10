import angular from 'angular';
import config from './advertisementManager.config';

import { AdvertisementList } from './advertisementList/advertisementList.component';

export const advertisementManager = angular.module('advertisementManager', [])
	.config(config)
	.component('advertisementList', AdvertisementList);


