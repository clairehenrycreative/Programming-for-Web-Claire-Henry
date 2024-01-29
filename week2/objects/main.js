const game1 = {
	title: 'pokemon diamond' ,
	type: 'nintendo switch' ,
	playerNumber: 1 ,
	rating: '10 out of 10',
	description: 'pokemond diamond version' ,
};

const game2 = {
	title: 'pokemon pearl' ,
	type: 'nintendo switch' ,
	playerNumber: 1 ,
	rating: '8 out of 10',
	description: 'pokemond pearl version' ,
};

const game3 = {
	title: 'pokemon scarlet' ,
	type: 'nintendo switch' ,
	playerNumber: 1 ,
	rating: '3 out of 10',
	description: 'pokemond scarlet version' ,
};

let favgames = [game1, game2, game3];
const gameprompt = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game');

alert('You have selected ' + favgames[gameprompt - 1].title + ' which can be played on ' + favgames[gameprompt - 1].type + ' player number ' + favgames[gameprompt - 1].playerNumber + 'Description' + favgames[gameprompt - 1].description);