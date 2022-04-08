export class Dice {

    valeur: number;
    nbFaces!: number;

    constructor(nbFaces?: number) {
        this.nbFaces = nbFaces || 6;
    }

    /**
     * Retourne la valeur du dé jeté
     */
    public start(): number {
        return Math.floor(Math.random()  * (6 - 1 + 1)) + 1;
    }

}
