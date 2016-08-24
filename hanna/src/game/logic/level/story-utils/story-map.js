import { Story_Point } from './story-point';

class Story_Map {
	constructor(map) {
		this.level_number 	= map.level_number;
		this.width 			= map.width;
		this.height 		= map.height
		this.story_points	= [];
	}

	createStoryPoint(position) {
		var x_coord = position[0];
		var y_coord = position[1];

		story_points.push(new Story_Point)
	}
}

export { Story_Map };