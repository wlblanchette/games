import React from 'react';
import _ from 'underscore';
// import ReactDOM from 'react-dom';

//Game Logic + presentation
import { GameMap } from './../logic/level/map-utils/map';
import { Tile_View } from './tile-view';
import { Player_View } from './player-view';
import { Player } from './../logic/player';







class Camera extends React.Component {
	constructor(props) {
    	super(props);
    	// initialize the gamemap
		  this.map 	              = props.map;
      this.cameraTopLeft      = props.cameraTopLeft;
      this.cameraScale        = props.cameraScale;
      this.player             = props.player;
  }

  canMove(coordinates) {
    // coordinates = [x, y]
    var tile = this.props.map.getMapCrossSection(coordinates, coordinates);

    return tile.movementAllowed() ? true : false;
  }

  getCameraBottomRight() {
    // For use in creating tiles via map.getMapCrossSection
    return [ this.props.cameraTopLeft[0] + this.props.cameraScale - 1, this.props.cameraTopLeft[1] + this.props.cameraScale - 1 ]
  }


  convertCameraUnitsToWorld(cameraUnits) {
    // Potentially for use with player positioning within camera frame.
    //   ---> X
    // |
    // |
    // V
    //
    // Y

    return [cameraUnits[0] + cameraTopLeft[0], cameraUnits[1] + cameraTopLeft[0]];
  }





              /********           *********/
              /********           *********/
              /******** RENDERING *********/
              /********           *********/
              /********           *********/

	render() {
    var jsx_content = []    
    
    console.log("* camera cross section: ",this.props.cameraTopLeft, " by ", this.getCameraBottomRight());


    //Get tiles
    var tiles = this.map.getMapCrossSection(this.props.cameraTopLeft, this.getCameraBottomRight());
    
    // store reference
    var playerPosition = this.props.player.position;
    tiles.forEach(function(tile) {
        jsx_content.push(
          <Tile_View 
            key              = {tile.position}
            position         = {tile.position}
            artFile          = {tile.artFile}
            isBoundary       = {tile.isBoundary}
            movementAllowed  = {tile.movementAllowed}
            hasStoryPoint    = {tile.hasStoryPoint}
            hasPlayer        = { _.isEqual(tile.position, playerPosition) ? true : false }
          />
        );
    });

    jsx_content.push(
      <Player_View key="player" player={this.props.player}/>
    );

    /* JSX return */
    return (
      <div className="Camera">{jsx_content}</div>
    );
	}
}

// ** Since the map contains all necessary attributes, for now 
// ** it will be the only property within the Camera
Camera.propTypes  = {
  map:                React.PropTypes.object,
  cameraTopLeft:      React.PropTypes.array,
  cameraScale:        React.PropTypes.number,
  player:             React.PropTypes.object
}



// Camera Scale has to be adjusted here and in Sass if necessary.
Camera.defaultProps = {
	map: 	              new GameMap(0),
  cameraTopLeft:      [0,0],
  cameraScale:        16,
  player:             new Player(4,4)

}


export { Camera };


//*** To do / plan:
//      Use logic here to position the tiles. you reach the end of a row, add a break/clearfix.