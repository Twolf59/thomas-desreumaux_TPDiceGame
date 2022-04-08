import {Dice} from "./Dice";

export class Cup {

    private _value: number;
    listDice: Dice[] = [];

    constructor(listDice: Dice[]) {
        this.listDice = listDice;
    }

    /**
     * Lancé du gobelet
     */
    start() {
        let value: number = 0;
        let listValue: number[] = [];
        this.listDice.forEach(dice => {
             let diceValue = dice.start();
             value += diceValue;
             listValue.push(diceValue);
        })
        console.log(listValue);
        this._value = value;
    }

    /**
     * Afficher le score du lancé actuel
     */
    displayScore(){
        console.log("Votre score pour ce tour est de " + this._value);
    }

    get value(): number {
        return this._value;
    }
}
