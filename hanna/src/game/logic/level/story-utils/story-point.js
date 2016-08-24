// Story points get activated in game by player actions, providing narative elements.

class StoryPoint {
	constructor(position = [0,0], name, content) {
		this.position	= position;
		this.name 		= name 		|| "new StoryPoint";
		this.content 	= content 	|| ["Story Content, pane 1", "Story Content, pane 2"];
	}
}

export { StoryPoint };