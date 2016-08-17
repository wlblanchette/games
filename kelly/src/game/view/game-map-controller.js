import React from 'react';
// import ReactDOM from 'react-dom';

//Game Logic + presentation
import { GameMap } from './../logic/level/map-utils/map';
import { Tile_View } from './tile-view';

class Map_Controller extends React.Component {
	constructor(props) {
    	super(props);
    	// initialize the gamemap
		  this.map 	              = props.map;
      this.cameraTopLeft      = props.cameraTopLeft;
      this.cameraBottomRight  = props.cameraBottomRight;

  }


  buildRow(i, row_content) {
    var classes = ["row", "n-"+i]
    return (<div key={i} className={classes[0] + " " + classes[1]}>{row_content}</div>)
  }


  getRowContent(i) {

    // each row at a time
    return this.props.map.mapTilesByRow(i, function(tile) {
      return(

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



                  /**             **/
                  /** For testing **/
                  /**             **/

        /* <p key={tile.position}>   
        {tile.position + " " + tile.artFile + " " + tile.isBoundary + " " + tile.movementAllowed + " " + tile.hasStoryPoint} 
        </p> */
      );
    });
  }
              /********           *********/
              /********           *********/
              /******** RENDERING *********/
              /********           *********/
              /********           *********/

	render() {
    var jsx_content = []
    for (var i=0; i<this.props.cameraTopLeft; i++) {
      
      // turn each row of tiles into jsx content
      // then, place that inside a row
      jsx_content.push(this.buildRow(i, this.getRowContent(i, range)));
    }


    /* JSX return */
    return (
      <div className="Map_Controller">{jsx_content}</div>
    );
	}
}

// ** Since the map contains all necessary attributes, for now 
// ** it will be the only property within the Map_Controller
Map_Controller.propTypes  = {
  map:                React.PropTypes.object,
  cameraTopLeft:      React.PropTypes.number,
  cameraBottomRight:  React.PropTypes.number
}

Map_Controller.defaultProps = {
	map: 	 new GameMap(0)
}


export { Map_Controller };


//*** To do / plan:
//      Use logic here to position the tiles. you reach the end of a row, add a break/clearfix.