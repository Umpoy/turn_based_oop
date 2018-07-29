$(document).ready(intializeApp);

let game;

function intializeApp() {
	// game = new Game();
	var Spiderman = new Character(spiderman);
	var Captain = new Character(captain);

	Captain.attack(Spiderman);
}