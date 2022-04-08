import {Player} from "./Player";
import {Cup} from "./Cup";
import {Dice} from "./Dice";

export class Game {

    nbTours: number;
    listPlayer: Player[] = []
    cup: Cup;

    constructor() {
    }

    /**
     * Initialiser la partie avec une liste de joueurs
     * @param players
     */
    initialization(players: Player[]){
        this.listPlayer = players;
        this.nbTours = players.length;
        let listDice: Dice[] = [];
        this.listPlayer.forEach(player => {
            listDice.push(new Dice());
        })
        this.cup = new Cup(listDice);
    }

    /**
     * Lancer le jeu
     */
    startGame(){
        for(let i = 0; i <= this.nbTours; i++){
            console.log("Tour " + i + " : ");
            console.log(" ");

            this.listPlayer.forEach(player => {
                console.log("Lancé du joueur " + player.name);
                player.play(this.cup);
                this.cup.displayScore();
                player.displayScore();
            });

            console.log(" ");
        }
    }

    /**
     * Afficher le gagnant
     */
    displayWinner(){
        let winnerScore = 0;
        let winnerName = null
        this.listPlayer.forEach(player => {
           if(player.score > winnerScore){
               winnerScore = player.score;
               winnerName = player.name;
           }
        });

        console.log("Le gagnant est " + winnerName + " pour un score de " + winnerScore);

    }
}
