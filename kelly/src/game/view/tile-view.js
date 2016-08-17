import React from 'react';
// import ReactDOM from 'react-dom';

import { Tile } from './../logic/level/map-utils/tile';


class Tile_View extends React.Component {
	constructor(props) {
		super(props);

        this.position 		 	= props.position;
		this.artFile 		 	= props.artFile;
		this.isBoundary		 	= props.isBoundary;
		this.movementAllowed	= props.movementAllowed;
		this.hasStoryPoint	 	= props.hasStoryPoint;
	}

	getStyles() {
		return {
			backgroundImage: 'url(' + this.props.artFile + ')'
		}
	}

	render() {
		return(
			<div className="tile" style={this.getStyles()}></div>
		);
	}
}

Tile_View.propTypes  = {
  position:  		React.PropTypes.array,
  artFile: 			React.PropTypes.string,
  isBoundary: 		React.PropTypes.bool,
  movementAllowed: 	React.PropTypes.bool,
  hasStoryPoint: 	React.PropTypes.bool
}

export { Tile_View };