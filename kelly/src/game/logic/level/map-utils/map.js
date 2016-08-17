// The map itself will be a 2D array of tiles.
import { Tile } from './tile';

class GameMap {
	constructor(level_number = 0, width = 60, height = 60) {
		this.level_number 	= level_number;
		this.width			= width;
		this.height			= height;
		this.tile_rows		= [];

		//build map if there's no input
		// if (tiles === []) {
		console.log("running build map")
		this.buildMap();
		// }
	}

			/*			   		 */
			/**			  		**/
			/**  CONSTRUCTORS	**/
			/**			  		**/
			/*			   		 */

	buildMap() {

		for(var i = 0; i < this.height; i++) {
			this.tile_rows[i] = [];
			for(var k = 0; k < this.width; k++) {
				this.tile_rows[i].push(new Tile( [k, i] ));
			}
		}
		this.setMapBoundaries();
	}

	setMapBoundaries() {
		var x_max = this.width - 1;
		var y_max = this.height - 1;
		var x_min = 0;
		var y_min = 0;

		this.iterateTilesByRow(function (tile) {
			var x_pos = tile.position[0];
			var y_pos =	tile.position[1];

			//along x max and min
			if (x_pos == x_max || x_pos == x_min) tile.setBoundary(true);

			// along y max and min
			if(y_pos == y_max || y_pos == y_min) tile.setBoundary(true);
		});
	}

	getBoundaries() {
		var boundaries = [];

		this.iterateTilesByRow(function(tile) {
			if (tile.isBoundary) boundaries.push(tile.position);
		});
		// this.tile_rows.forEach(function(row) {
		// 	row.forEach(function(tile) {
		// 		if (tile.isBoundary) boundaries.push(tile.position);
		// 	});
		// });
		// console.log("found boundaries" + boundaries);
		return boundaries;
	}


			/*			   		 */
			/**			  		**/
			/** IMPLEMENTATION  **/
			/**			  		**/
			/*			   		 */

	// returns a section of the map's tiles based on a cross-section
	getMapCrossSection(leftTopCorner, rightLowerCorner) {
		var tilesToSend = [];

		// y coordinate orientation is top to bottom. y=0 is 
		// top row in the generated map.
		var x_min = leftTopCorner[0];
		var x_max = rightLowerCorner[0];
		var y_min = leftTopCorner[1];
		var y_max = rightLowerCorner[1];

		var mapMaxX = this.width - 1;
		var mapMaxY = this.height - 1;

		// console.log("x min: ", x_min);
		// console.log("x max: ", x_max);
		// console.log("y min: ", y_min);
		// console.log("y max: ", y_max);

		// Error handling
		if (y_min < 0 || y_max > mapMaxY) return console.log(this, "Y of ", y_max, " is out of bounds error from getMapCrossSection | map.js | map height = ", mapMaxY);

		// go by y, then check the x and return if in range
		var i = y_min;
		while(i <= y_max) {
			//within this row / y range, check if x_tile is within x range
			this.tile_rows[i].forEach(function(tile) {
				var x_tile = tile.position[0];

				// console.log("x tile: ",x_tile);
				// console.log("y tile: ",y_tile);
				// console.log("x_max within tile.forEach: ",x_max);
				
				if(x_tile < 0 || x_tile > mapMaxX) return console.log(this, "X of ", x_tile, " is out of bounds error from getMapCrossSection | map.js | map width = ", mapMaxY);
				if(x_tile >= x_min && x_tile < x_max) tilesToSend.push(tile);
			});

			i++;
		}
		return tilesToSend;
	}


			/*			   */
			/**			  **/
			/**  HELPERS  **/
			/**			  **/
			/*			   */

	iterateTilesByRow(toPerform) {
		this.tile_rows.forEach(function(row) {
			row.forEach(function (tile) {
				return toPerform(tile);
			})
		});
	}

	mapTiles(toPerform) {
		var returns = [];
		this.tile_rows.forEach(function(row) {
			row.forEach(function (tile) {
				returns.push(toPerform(tile));
			})
		});
		return returns;
	}

	mapTilesByRow(index, toPerform) {
		var returns = [];
		this.tile_rows[index].forEach(function(tile) {
			returns.push(toPerform(tile));
		})
		return returns;
	}



}

export { GameMap };