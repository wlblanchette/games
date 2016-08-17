class Item {
	constructor (name, type, magnifier) {
		this.name 		= name;
		this.magnifier 	= magnifier;

		// item types allowed
		if (type === "weapon" || type === "potion") {
			this.type = type;
		}
	}
}

export { Item };