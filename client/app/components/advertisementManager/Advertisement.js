class Advertisement {
	constructor({ _id, name, street, rooms, price, status} = {}) {

		this._id = _id;
		this.name = name;
		this.street = street;
		this.rooms = rooms;
		this.price = price;
		this.status = status;
	}
}

export default Advertisement;

