import React from 'react';
// import ReactDOM from 'react-dom';

//Game Logic + presentation
import { GameMap } from './../logic/level/map-utils/map';
import { MapUtil__Row } from './map-row';







class Map_Controller extends React.Component {
	constructor(props) {
    	super(props);
    	// initialize the gamemap
		  this.map 	              = props.map;
      this.cameraTopLeft      = props.cameraTopLeft;
      this.cameraScale        = 20;

  }

  // Map coordinates are left to right, for x and top to bottom, for y
  getTiles__Row(i, x_min_cam, x_max_cam) {
    var coords = [[x_min_cam, i],[x_max_cam, i]];
    console.log("i from getTiles__Row in Map_Controller = ",i);
    return this.props.map.getMapCrossSection(coords[0], coords[1]);
  }

  // Tiles are owned by rows
  buildRow(i, tiles) {
    return ( <MapUtil__Row key={i} index={i} tiles={tiles} /> );
  }

              /********           *********/
              /********           *********/
              /******** RENDERING *********/
              /********           *********/
              /********           *********/

	render() {
    var jsx_content = []

    var x_min_cam = this.cameraTopLeft[0];
    var x_max_cam = this.cameraTopLeft[0] + this.cameraScale;
    var y_min_cam = this.cameraTopLeft[1];
    var y_max_cam = this.cameraTopLeft[1] + this.cameraScale;

    console.log(y_max_cam, "is y_max_cam");

    var i = this.props.cameraTopLeft[1];
    while (i < y_max_cam) {
      
      // for each row, create a new MapUtil_Row, and 
      // feed it the tiles it needs
      jsx_content.push(this.buildRow(i, this.getTiles__Row(i, x_min_cam, x_max_cam)));
      i++
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
  cameraTopLeft:      React.PropTypes.array,
  cameraScale:        React.PropTypes.number
}



// Camera Scale has to be adjusted here and in Sass if necessary.
Map_Controller.defaultProps = {
	map: 	             new GameMap(0),
  cameraTopLeft:     [0,0]
}


export { Map_Controller };


//*** To do / plan:
//      Use logic here to position the tiles. you reach the end of a row, add a break/clearfix.