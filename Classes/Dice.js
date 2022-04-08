"use strict";
exports.__esModule = true;
exports.Dice = void 0;
var Dice = /** @class */ (function () {
    function Dice(nbFaces) {
        this.nbFaces = nbFaces || 6;
    }
    /**
     * Retourne la valeur du dé jeté
     */
    Dice.prototype.start = function () {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    };
    return Dice;
}());
exports.Dice = Dice;
