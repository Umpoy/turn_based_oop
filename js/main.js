$(document).ready(intializeApp);

let game;

const spiderman = {
	name: "Spider-Man",
	intel: 100,
	str: 55,
	speed: 70,
	durability: 75,
	power: 75,
	combat: 95
}

const ironman = {
	name: "Iron Man",
	intel: 100,
	str: 85,
	speed: 60,
	durability: 85,
	power: 100,
	combat: 65
}

function intializeApp() {
	// game = new Game();
	var Spiderman = new Character(spiderman);
	Spiderman.attack();
}