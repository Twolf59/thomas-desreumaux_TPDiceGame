"use strict";
exports.__esModule = true;
exports.Cup = void 0;
var Cup = /** @class */ (function () {
    function Cup(listDice) {
        this.listDice = [];
        this.listDice = listDice;
    }
    /**
     * Lancé du gobelet
     */
    Cup.prototype.start = function () {
        var value = 0;
        var listValue = [];
        this.listDice.forEach(function (dice) {
            var diceValue = dice.start();
            value += diceValue;
            listValue.push(diceValue);
        });
        console.log(listValue);
        this._value = value;
    };
    /**
     * Afficher le score du lancé actuel
     */
    Cup.prototype.displayScore = function () {
        console.log("Votre score pour ce tour est de " + this._value);
    };
    Object.defineProperty(Cup.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return Cup;
}());
exports.Cup = Cup;
