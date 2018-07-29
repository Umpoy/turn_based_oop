$(document).ready(intializeApp);

let game;

function intializeApp() {
	// game = new Game();
	var Player1 = new Character(ironman);
	var Player2 = new Character(spiderman);

Player1.attack(Player2);
}