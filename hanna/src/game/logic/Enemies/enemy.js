import { Item } from "./../item";
class Enemy {
	constructor(name, species, items = [], position = [0,0]) {
		this.name 	 	= name;
		this.species 	= species;
		this.items 	 	= this.setItems(items);
		this.position	= position;
		this.facing		= 0;

		this.weapon		= items.forEach(function(item){
			if(item.type === "weapon") {
				return item;
			}
		});
	}

	//axis: 0 = down, 1 = left, 2 = right, 3 = up
	move(magnitude = 1) {
		this.facing = Math.trunc(Math.random() * 1000) % 4;
		switch (this.facing) {
			case 0:
				this.position = [this.position[0], this.position[1] - magnitude];
				break;
			case 1:
				this.position = [this.position[0] - magnitude, this.position[1]];
				break;
			case 2:
				this.position = [this.position[0] + magnitude, this.position[1]];
				break;
			case 3:
				this.position = [this.position[0], this.position[1] + magnitude];
				break;
		}
	}

	attack() {
		return this.weapon.magnifier;
	}



	/*
	 * internal functions
	 */

	setItems(items) {
		var c = [];

		items.forEach(function(item){
			c.push(new Item(item.name, item.type, item.magnifier));
		});
	}
}

export { Enemy };