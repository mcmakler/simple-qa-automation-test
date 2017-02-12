const advertisementEventEmitter = require('./AdvertisementEventEmitter');

class AdvertisementSocket {
	constructor(socket) {
		this.socket = socket;
	}

	setUserId(userId) {
		this.socket.userId = userId;
	}

	static emitAddAdvertisement(fromUserId, io) {
		Object.keys(io.sockets.sockets)
			.filter((socketId) => {
				return io.sockets.sockets[socketId].userId !== fromUserId;
			})
			.forEach((socketId) => {
				io.sockets.sockets[socketId].emit('add:advertisement');
			});
	}
}


module.exports = function(server) {
	const io = require('socket.io')(server);

	advertisementEventEmitter.on('event:add:advertisement', (fromUserId) => {
		AdvertisementSocket.emitAddAdvertisement(fromUserId, io);
	});

	io.on('connection',  (socket) => {
		const advertisementSocket = new AdvertisementSocket(socket);

		socket.on('create:user', (userId) => {
			advertisementSocket.setUserId(userId);
		});
	});
};
