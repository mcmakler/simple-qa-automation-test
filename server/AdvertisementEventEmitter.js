const EventEmitter = require('events').EventEmitter;

class AdvertisementEventEmitter extends EventEmitter {
	constructor() {
		super();
	}
}

const advertisementEventEmitter = new AdvertisementEventEmitter();

module.exports = advertisementEventEmitter;
