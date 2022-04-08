import {Game} from "./Classes/Game";
import {Player} from "./Classes/Player";


let game = new Game();
let benjamin = new Player("test1", 0);
let arthur = new Player("test2", 0);
let romain = new Player("test3", 0);

game.initialization([benjamin, arthur, romain]);
game.startGame();
game.displayWinner();
