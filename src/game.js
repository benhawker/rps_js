function Game() {
	this.options = ["Rock", "Paper", "Scissors"];

	this.winningCombos = {"Rock" : "Scissors", 
												"Paper" : "Rock", 
												"Scissors" : "Paper"}; 
	this.playerOneChoice = "";
	// this.playerTwoChoice = "";
	this.playerOneCount = 0;
	this.playerTwoCount = 0;
	// perhaps not required as can simply use return.
	this.result = "";
};

//for computer selection
Game.prototype.randomSelection = function() {
	return _.sample(this.options)
};

//can be extended with 2nd arg for other players
Game.prototype.makeChoice = function(choice) {
	this.playerOneChoice = choice;
};


Game.prototype.play = function(playerOne, playerTwo) {
	if (playerTwo === undefined) {
		playerTwo = this.randomSelection();
	};

	if (playerOne === playerTwo) {
		return "Draw";
	}
	else if (this.winningCombos[playerOne] === playerTwo) {
		return "Player One Wins";
	}
	else {
		return "Player Two Wins";
	}
};









// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };