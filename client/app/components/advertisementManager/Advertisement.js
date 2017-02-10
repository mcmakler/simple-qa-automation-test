class Advertisement {
	constructor({ id, advertisementName, street, rooms, price, status} = {}) {

		this.id = id;
		this.advertisementName = advertisementName;
		this.street = street;
		this.rooms = rooms;
		this.price = price;
		this.status = status;
	}
}

export default Advertisement;

