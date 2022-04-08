import {Cup} from './Cup'

export class Player {

    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    /**
     * Lancé de dés du joueur
     * @param cup
     */
    play(cup: Cup){
        cup.start();
        this.score += cup.value;
    }

    /**
     * Afficher le score total du joueur
     */
    displayScore(){
        console.log("Score de " + this.name + " est de " + this.score);
    }

}
