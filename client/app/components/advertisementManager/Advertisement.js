class Advertisement {
	constructor({ id, advertisementName, street, floor, rooms, price, status} = {}) {

		this.id = id;
		this.advertisementName = advertisementName;
		this.street = street;
		this.floor = floor;
		this.rooms = rooms;
		this.price = price;
		this.status = status;
	}
}

export default Advertisement;

