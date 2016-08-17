(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GameMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // The map itself will be a 2D array of tiles.


var _tile = require("./tile");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMap = function () {
	function GameMap() {
		var level_number = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		var width = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];
		var height = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

		_classCallCheck(this, GameMap);

		this.level_number = level_number;
		this.width = width;
		this.height = height;
		this.tile_rows = [];

		//build map if there's no input
		// if (tiles === []) {
		console.log("running build map");
		this.buildMap();
		// }
	}

	/*			   		 */
	/**			  		**/
	/**  CONSTRUCTORS	**/
	/**			  		**/
	/*			   		 */

	_createClass(GameMap, [{
		key: "buildMap",
		value: function buildMap() {

			for (var i = 0; i < this.height; i++) {
				this.tile_rows[i] = [];
				for (var k = 0; k < this.width; k++) {
					this.tile_rows[i].push(new _tile.Tile([k, i]));
				}
			}
			this.setMapBoundaries();
		}
	}, {
		key: "setMapBoundaries",
		value: function setMapBoundaries() {
			var x_max = this.width - 1;
			var y_max = this.height - 1;
			var x_min = 0;
			var y_min = 0;

			this.iterateTilesByRow(function (tile) {
				var x_pos = tile.position[0];
				var y_pos = tile.position[1];

				//along x max and min
				if (x_pos == x_max || x_pos == x_min) tile.setBoundary(true);

				// along y max and min
				if (y_pos == y_max || y_pos == y_min) tile.setBoundary(true);
			});
		}
	}, {
		key: "getBoundaries",
		value: function getBoundaries() {
			var boundaries = [];

			this.iterateTilesByRow(function (tile) {
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

	}, {
		key: "getMapCrossSection",
		value: function getMapCrossSection(leftTopCorner, rightLowerCorner) {
			var tilesToSend = [];

			// y coordinate orientation is top to bottom. y=0 is 
			// top row in the generated map.
			var x_min = leftTopCorner[0];
			var x_max = rightLowerCorner[0];
			var y_min = leftTopCorner[1];
			var y_max = rightLowerCorner[1];

			// console.log("x min: ", x_min);
			// console.log("x max: ", x_max);
			// console.log("y min: ", y_min);
			// console.log("y max: ", y_max);

			// go by y, then check the x and return if in range
			var i = y_min;
			while (i <= y_max) {

				//within this row / y range, check if x_tile is within x range
				this.tile_rows[i].forEach(function (tile) {
					var x_tile = tile.position[0];

					// console.log("x tile: ",x_tile);
					// console.log("y tile: ",y_tile);
					// console.log("x_max within tile.forEach: ",x_max);


					if (x_tile >= x_min && x_tile <= x_max) tilesToSend.push(tile);
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

	}, {
		key: "iterateTilesByRow",
		value: function iterateTilesByRow(toPerform) {
			this.tile_rows.forEach(function (row) {
				row.forEach(function (tile) {
					return toPerform(tile);
				});
			});
		}
	}, {
		key: "mapTiles",
		value: function mapTiles(toPerform) {
			var returns = [];
			this.tile_rows.forEach(function (row) {
				row.forEach(function (tile) {
					returns.push(toPerform(tile));
				});
			});
			return returns;
		}
	}, {
		key: "mapTilesByRow",
		value: function mapTilesByRow(index, toPerform) {
			var returns = [];
			this.tile_rows[index].forEach(function (tile) {
				returns.push(toPerform(tile));
			});
			return returns;
		}
	}]);

	return GameMap;
}();

exports.GameMap = GameMap;

},{"./tile":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storyPoint = require("./../story-point");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {

	// ** Tile position will be it's position within the map.
	// position is defined with (x,y) where x = 0 and y = 0, being generated
	// top left. 
	// x values increase left to right
	// y values increase top to bottom

	function Tile() {
		var position = arguments.length <= 0 || arguments[0] === undefined ? [0, 0] : arguments[0];
		var artFile = arguments.length <= 1 || arguments[1] === undefined ? "./../assets/art/defaultTile.jpg" : arguments[1];

		_classCallCheck(this, Tile);

		this.position = position;
		this.artFile = artFile;
		this.isBoundary = false;
		this.movementAllowed = true;
		this.hasStoryPoint = false;
	}

	_createClass(Tile, [{
		key: "addStoryPoint",
		value: function addStoryPoint(storypoint__name, storypoint__content) {
			this.storyPoint = new _storyPoint.StoryPoint(storypoint__name, storypoint__content);
			this.hasStoryPoint = true;
		}
	}, {
		key: "setBoundary",
		value: function setBoundary() {
			var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

			this.isBoundary = bool;
		}
	}, {
		key: "changeArtFile",
		value: function changeArtFile(newArtFile) {
			this.artFile = newArtFile;
		}
	}, {
		key: "getPosition",
		value: function getPosition() {
			return this.position;
		}
	}]);

	return Tile;
}();

exports.Tile = Tile;

},{"./../story-point":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Story points get activated in game by player actions, providing narative elements.

var StoryPoint = function StoryPoint() {
	var name = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
	var content = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

	_classCallCheck(this, StoryPoint);

	this.name = name;
	this.content = content;
};

exports.StoryPoint = StoryPoint;

},{}]},{},[1]);
