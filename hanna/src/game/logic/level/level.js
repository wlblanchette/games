import { GameMap } from './map-utils/map';

class Level {
	constructor(level_number) {
		this.level_number 	= level_number;
		this.map 			= new GameMap(this.level_number);
	}
}

export { Level };