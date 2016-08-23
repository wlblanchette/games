			/*									*/
			/* 				GAME.JS 			*/
			/*	This class contains game logic	*/
			/*									*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Player } from './logic/player';
import { Level } from './logic/level/level';
import { Camera } from './view/camera-view';

// import { Level } from './helpers/level';

// The game contains logic for player interactions
class Game {
	constructor (level_number) {
		this.player 	= new Player();
		// this.level 		= new Level(levelNumber);
		this.enemies	= [];
		this.friendlies	= [];
		this.level 		= new Level(level_number);
	}

	// spawnEnemy() {
	// 	enemies.push(new Enemy());
	// }
}

export { Game };


		/****					****/
		/**** TESTING FUNCTIONS ****/
		/****					****/
		
var g = new Game(1);
console.log("running game.js");
console.log(g.level.level_number);
console.log(g.level.map.level_number);
console.log("tile 6 position = " + g.level.map.tile_rows[0][6].position);
console.log(g.player.name);

var boundaries = [];
var boundaries = g.level.map.getBoundaries();

// boundaries.forEach(function(boundary) {
// 	console.log("tile boundary at: " + boundary);
// });

ReactDOM.render(
	<Camera map = {g.level.map} />, document.getElementById('main')
);

console.log("tile 0 = " + boundaries[0])