import io from 'socket.io-client';

export class SocketService {
	constructor(socketFactory, $window) {
		'ngInject';

		this.socket = socketFactory({
				ioSocket: io('http://localhost:3000'),
			});

		this.userId = $window.sessionStorage.getItem('socket:userId') || this.generateUserId();
		$window.sessionStorage.setItem('socket:userId', this.userId);

		this.socket.emit('create:user', this.userId);
	}

	generateUserId() {
		let d = new Date().getTime();

		if(window.performance && typeof window.performance.now === "function"){
			d += window.performance.now(); //use high-precision timer if available
		}

		const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = (d + Math.random()*16)%16 | 0;

			d = Math.floor(d/16);
			return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
		});

		return uuid;
	}
}
