import React from 'react';

// logic
import { Camera } from './camera-view';
import { Player } from '../logic/player';
import { GameMap } from '../logic/level/map-utils/map';

class Game_Controller_View extends React.Component {
	constructor(props) {
		super(props);
		this.level_number		= props.level_number;
		this.map				= new GameMap( props.level_number );
		this.camera_start_pos	= props.camera_start_pos;
	}

	render() {
		return(
			<div className="Game_Controller_View">
				<Camera key 			= "camera"
						cameraTopLeft 	= { this.props.camera_start_pos } 
						map 			= { this.props.map } 
						Player 			= { this.props.player }
					/>
			</div> 
		);
	}
}

Game_Controller_View.propTypes = {
	level_number: 		React.PropTypes.number,
	camera_start_pos: 	React.PropTypes.array,
	player: 			React.PropTypes.object,
	map: 				React.PropTypes.object
}

Game_Controller_View.defaultProps = {
	level_number: 		0,
	camera_start_pos: 	[0,0],
	player: 			new Player([8,8]),
	map: 				new GameMap(0)
}

export { Game_Controller_View };