import React from 'react';

import { Tile } from './../logic/level/map-utils/tile';


class Tile_View extends React.Component {
	constructor(props) {
		super(props);

        this.position 		 	= props.position;
		this.artFile 		 	= props.artFile;
		this.isBoundary		 	= props.isBoundary;
		this.movementAllowed	= props.movementAllowed;
		this.hasStoryPoint	 	= props.hasStoryPoint;
		// this.hasPlayer			= props.hasPlayer;
	}

	getStyles() {
		return {
			backgroundImage: 'url(' + this.props.artFile + ')',
			transform: 'translate(' + (this.props.position[0] * 100) + '%, ' + (this.props.position[1] * 100) + '%)'
		}
	}

	render() {
		var classes 	= "tile " + this.props.position;
		// var jsx_content = [];

		// if(this.props.hasPlayer){
		// 	jsx_content.push( <Player key="player"/> ); 
		// }


		return ( 
			<div className={classes} style={this.getStyles()}></div>
		);
	}
}

Tile_View.propTypes  = {
  position:  		React.PropTypes.array,
  artFile: 			React.PropTypes.string,
  isBoundary: 		React.PropTypes.bool,
  movementAllowed: 	React.PropTypes.bool,
  hasStoryPoint: 	React.PropTypes.bool,
  hasPlayer: 		React.PropTypes.bool
}

export { Tile_View };