const advertisementEventEmitter = require('./AdvertisementEventEmitter');

class AdvertisementSocket {
	constructor(socket) {
		this.socket = socket;
	}

	setUserId(userId) {
		this.socket.userId = userId;
	}

	static emitAdvertisementEvent({ fromUserId, io, eventName }) {
		Object.keys(io.sockets.sockets)
			.filter((socketId) => {
				return io.sockets.sockets[socketId].userId !== fromUserId;
			})
			.forEach((socketId) => {
				io.sockets.sockets[socketId].emit(eventName);
			});
	}
}


module.exports = function(server) {
	const io = require('socket.io')(server);

	advertisementEventEmitter.on('event:add:advertisement', (fromUserId) => {
		AdvertisementSocket.emitAdvertisementEvent({
			fromUserId,
			io,
			eventName: 'add:advertisement'
		});
	});

	advertisementEventEmitter.on('event:edit:advertisement', (fromUserId) => {
		AdvertisementSocket.emitAdvertisementEvent({
			fromUserId,
			io,
			eventName: 'edit:advertisement'
		});
	});

	io.on('connection',  (socket) => {
		const advertisementSocket = new AdvertisementSocket(socket);

		socket.on('create:user', (userId) => {
			advertisementSocket.setUserId(userId);
		});
	});
};
