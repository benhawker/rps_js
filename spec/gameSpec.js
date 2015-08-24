describe("Game", function () {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("random computer player", function() {
    it("returns a random from rps", function() {
      spyOn(game, "randomSelection").and.returnValue("Rock");
      expect(game.randomSelection()).toEqual("Rock");
    });
  });

  describe("user selection", function() {
    it("player 1 can make a selection", function() {
      game.makeChoice("Paper");
      expect(game.playerOneChoice).toEqual("Paper");
    });
  });

  describe("2nd player default", function() {
    it("defaults to computer player if no second arg is given", function() {
      spyOn(game, "randomSelection").and.returnValue("Rock");
      expect(game.play("Rock")).toEqual("Draw");
    });
  });


  describe("potential game results", function() {
    it("returns a draw if both players choose rock", function() {
      expect(game.play("Rock", "Rock")).toEqual("Draw");
    });

    it("returns a draw if both players choose paper", function() {
      expect(game.play("Paper", "Paper")).toEqual("Draw");
    });

    it("returns a draw if both players choose scissors", function() {
      expect(game.play("Scissors", "Scissors")).toEqual("Draw");
    });

    it("Rock vs Paper", function() {
      expect(game.play("Rock", "Paper")).toEqual("Player Two Wins");
    });

    it("Rock vs Scissors", function() {
      expect(game.play("Rock", "Scissors")).toEqual("Player One Wins");
    });

    it("Paper vs Rock", function() {
      expect(game.play("Paper", "Rock")).toEqual("Player One Wins");
    });

    it("Paper vs Scissors", function() {
      expect(game.play("Paper", "Scissors")).toEqual("Player Two Wins");
    });

    it("Scissors vs Rock", function() {
      expect(game.play("Scissors", "Rock")).toEqual("Player Two Wins");
    });

    it("Scissors vs Paper", function() {
      expect(game.play("Scissors", "Paper")).toEqual("Player One Wins");
    });

  });

});
// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
