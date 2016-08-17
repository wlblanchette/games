import React from 'react';

import { Tile_View } from './tile-view';



class MapUtil__Row extends React.Component {
	constructor(props) {
		super(props);
		this.index		= props.index;
		// this.classNames = ["row"].push(props.classNames);
		this.tiles		= props.tiles;
	}

	render() {
		var jsx_content = [];
		this.props.tiles.forEach(function(tile) {
			jsx_content.push(

				// Tile Properties: 
		        //    1. position 
		        //    2. artFile  
		        //    3. isBoundary
		        //    4. movementAllowed
		        //    5. hasStoryPoint

		        <Tile_View 
		          key              = {tile.position}
		          position         = {tile.position}
		          artFile          = {tile.artFile}
		          isBoundary       = {tile.isBoundary}
		          movementAllowed  = {tile.movementAllowed}
		          hasStoryPoint    = {tile.hasStoryPoint}
		        />
			);
		});

		var classes = "map__row " + "n-" + this.props.index;

		return (<div className={classes}>{jsx_content}</div>);
	}
}

MapUtil__Row.propTypes = {
	index: React.PropTypes.number,
	tiles: React.PropTypes.array
}


export { MapUtil__Row };