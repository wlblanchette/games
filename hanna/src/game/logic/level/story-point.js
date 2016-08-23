// Story points get activated in game by player actions, providing narative elements.

class StoryPoint {
	constructor(name = "", content = "") {
		this.name 		= name;
		this.content 	= content;
	}
}

export { StoryPoint };