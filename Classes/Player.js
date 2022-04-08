"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.name = name;
        this.score = score;
    }
    /**
     * Lancé de dés du joueur
     * @param cup
     */
    Player.prototype.play = function (cup) {
        cup.start();
        this.score += cup.value;
    };
    /**
     * Afficher le score total du joueur
     */
    Player.prototype.displayScore = function () {
        console.log("Score de " + this.name + " est de " + this.score);
    };
    return Player;
}());
exports.Player = Player;
