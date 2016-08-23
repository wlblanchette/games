import React from 'react';

// logic
import { Player } from '../logic/player';

class Player_View extends React.Component {
	constructor(props) {
		super(props);

		this.player = props.player;
	}

	// Use player orientation to choose art asset.
	getArt() {
		switch (this.props.player.facing) {
			case 0:
				return this.props.artDir + "down.png";
			
			case 1:
				return this.props.artDir + "left.png";
			
			case 2:
				return this.props.artDir + "right.png";
			
			case 3:
				return this.props.artDir + "up.png";
			default:
				console.log("*** Out of bounds from player-view.js >> player.facing != 0, 1, 2, or 3")
		}
	}

	getStyles() {
		return {
			backgroundImage: 'url(' + this.getArt() + ')',
			transform: 'translate(' + (this.props.player.position[0] * 100) + '%, ' + (this.props.player.position[1] * 100) + '%)'
		}
	}

	render() {
		return ( <div style={this.getStyles()} className="player"></div> );
	}
}

// Define base path for art assets.
Player_View.defaultProps = {
	artDir: 		"./../assets/art/player/"
}

Player_View.propTypes  = {
	player: 		React.PropTypes.object,
	artDir: 		React.PropTypes.string
}


export { Player_View };