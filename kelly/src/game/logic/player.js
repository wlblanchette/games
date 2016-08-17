// Player orientation:
//
// var Down	 = 0;
// var Left	 = 1;
// var Right	 = 2;
// var Up		 = 3;
import { Item } from "./item";

class Player {
	constructor (x, y) {
		this.name 		= "Kelly";
		this.health 	= 100;
		this.items		= [];
		this.position 	= [x, y];
		this.facing		= 0;
	}

	

	putItems(newItems) {
		newItems.forEach(function(item) {
			this.items.push(new Item(item.name, item.type, item.magnifier));
		});	
	}

	takeDamage(damage) {
		this.health = this.health - Math.trunc(damage);
	}

	heal(addHealth) {
		this.health = this.health + Math.trunc(addHealth);
	}

	useItem(item) {
		this.items.forEach(function(i) {
			if (i.name === item) {
				switch(item.type) {
					case "weapon":
						return item.magnifier;
					case "potion":
						this.heal(item.magnifier);
						break;
				}
			}
		});
	}

	move(axis, magnitude) {
		if (this.facing === axis) {
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
		} else {
			this.facing = axis;
		}
	}
}

export { Player };