"use strict";
exports.__esModule = true;
var Game_1 = require("./Classes/Game");
var Player_1 = require("./Classes/Player");
var game = new Game_1.Game();
var benjamin = new Player_1.Player("test1", 0);
var arthur = new Player_1.Player("test2", 0);
var romain = new Player_1.Player("test3", 0);
game.initialization([benjamin, arthur, romain]);
game.startGame();
game.displayWinner();
