const advertisementEventEmitter = require('./AdvertisementEventEmitter');

class AdvertisementSocket {
	constructor(socket) {
		this.socket = socket;

		advertisementEventEmitter.on('add:advertisement', () => {
			this.emitAddAdvertisement();
		});
	}

	emitAddAdvertisement() {
		this.socket.emit('add:advertisement');
	}
}


module.exports = function(server) {
	const io = require('socket.io')(server);

	io.on('connection',  (socket) => {
		const advertisementSocket = new AdvertisementSocket(socket);
	});
};
