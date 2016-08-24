class Tile {
	
	// ** Tile position will be it's position within the map.
	// position is defined with (x,y) where x = 0 and y = 0, being generated
	// top left. 
	// x values increase left to right
	// y values increase top to bottom

	constructor(position = [0, 0], artFile = "./../assets/art/defaultTile.jpg") {
		this.position 			= position;
		this.artFile			= artFile;
		this.isBoundary			= false;
		this.movementAllowed	= true;
	}

	setBoundary(bool = true) {
		this.isBoundary = bool;
	}

	changeArtFile(newArtFile) {
		this.artFile = newArtFile;
	}

	getPosition() {
		return this.position;
	}
}

export { Tile };