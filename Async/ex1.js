class DepotScores {
    constructor(jury) {
        this.score = new Map();
        jury.forEach(arbitre => this.score.set(arbitre.nom, new Map()))
    }

    /**
     * ajoute le score attribué à un enfant par un arbitre
     * @param {Arbitre} arbitre
     * @param {Enfant} enfant
     * @param {int} score
     */
    sauverScore(arbitre, enfant, score) {
        this.score.get(arbitre.nom).set(enfant.nom, score)
        console.log(`${enfant.nom} à reçu une côte de ${score} par le jury : ${arbitre.nom}`)
    }

    /**
     * calcule le total des scores obtenus par un enfant
     * @param {Enfant} enfant
     */
    totaliserScore(enfant) {
        let promises = [];
        jury.forEach(promises.push(new Promise()))
    }
}

class Personne {
    /**
     * @param {string} nom
     */
    constructor(nom){
        this.nom = nom;
    }
}

class Enfant extends Personne {
    constructor(nom) {
        super(nom);
    }
    /**
     * obtention du score de la part de chaque arbitre
     * @param jury
     * @param scores
     */
    obtenirScores(jury, scores) {
        jury.forEach(currentJury => {
            console.log(`Vote de ${currentJury.nom} sur ${this.nom} ?`);
            currentJury.coter(scores, this);
        })
    }
}

class Arbitre extends Personne {
    constructor(nom) {
        super(nom);
    }
    /**
     * simule la cotation de la prestation d'un enfant par l'arbitre. L'arbitre
     * peut coter (valeur aléatoire comprise entre [0 et 10]) dans un délai compris entre 0 et 5secondes maximum
     * (utilisez setTimeout à cet effet).
     * @param {DepotScores} depotScores
     * @param {Enfant} enfant
     */
    coter(depotScores, enfant) {
        let rdm = 0;
        const cote = this.interrogerArbitre().then(() => {
            rdm = Math.floor(Math.random() * 10)
            depotScores.sauverScore(this, enfant, rdm)
        }).catch(() => {
            
        })

        setTimeout(() => {

        }, 2500)
    }

    /**
     *
     * @returns {Promise<>}
     */
    interrogerArbitre() {
        let rdm = Math.floor(Math.random() * 7);
        return new Promise((resolve, reject) => setTimeout(() => {
            rdm >= 5 ? resolve() : reject(new Error);
        }, 2500));
    }
}

let enfants = [
    new Enfant('Andréa Maxence'),
    new Enfant('Ronan Vivien'),
    new Enfant('Demetrio Yasmin'),
    new Enfant('Kanya Lorenzo'),
    new Enfant('Claptrap Jessica'),
    new Enfant('Sung Li')
];
let jury = [
    new Arbitre('Faro Lindemans'),
    new Arbitre('Dave Gilmort'),
    new Arbitre('Angus Old'),
    new Arbitre('Jacques Hetchamp')
];
let scores = new DepotScores(jury);
enfants.forEach(e => e.obtenirScores(jury, scores));
