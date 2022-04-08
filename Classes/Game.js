"use strict";
exports.__esModule = true;
exports.Game = void 0;
var Cup_1 = require("./Cup");
var Dice_1 = require("./Dice");
var Game = /** @class */ (function () {
    function Game() {
        this.listPlayer = [];
    }
    /**
     * Initialiser la partie avec une liste de joueurs
     * @param players
     */
    Game.prototype.initialization = function (players) {
        this.listPlayer = players;
        this.nbTours = players.length;
        var listDice = [];
        this.listPlayer.forEach(function (player) {
            listDice.push(new Dice_1.Dice());
        });
        this.cup = new Cup_1.Cup(listDice);
    };
    /**
     * Lancer le jeu
     */
    Game.prototype.startGame = function () {
        var _this = this;
        for (var i = 0; i <= this.nbTours; i++) {
            console.log("Tour " + i + " : ");
            console.log(" ");
            this.listPlayer.forEach(function (player) {
                console.log("Lancé du joueur " + player.name);
                player.play(_this.cup);
                _this.cup.displayScore();
                player.displayScore();
            });
            console.log(" ");
        }
    };
    /**
     * Afficher le gagnant
     */
    Game.prototype.displayWinner = function () {
        var winnerScore = 0;
        var winnerName = null;
        this.listPlayer.forEach(function (player) {
            if (player.score > winnerScore) {
                winnerScore = player.score;
                winnerName = player.name;
            }
        });
        console.log("Le gagnant est " + winnerName + " pour un score de " + winnerScore);
    };
    return Game;
}());
exports.Game = Game;
