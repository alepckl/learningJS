class Cycliste {
    constructor(matricule, nom, score) {
        this.matricule = matricule;
        this.nom = nom;
        this.score = score;
    }

    resetScore() {
        this.score = 0;
    }

    printCyclist() {
        console.log(`${this.nom.toUpperCase()} (${this.matricule}): ${this.score}`);
    }

    set changePoints(value) {
        this.score += value;
    }
}


class Classement {
    constructor(nbrRecompenses, ...cyclists) {
        this.cyclists = cyclists;
        this.nbrRecomponses = nbrRecompenses;
    }

    addCyclist(...cyclist) {
        cyclist.push(...cyclist);
    }

    print() {
        let sortedArray = this.cyclists.sort((cyclistA, cyclistB) => cyclistA.score - cyclistB.score);
    }

    removeCyclist(cyclist) {
        this.cyclists = this.cyclists.filter(x => x !== cyclist);
    }


}