

/**
 * Génère une séquence de chiffres et lettres aléatoires d'une longueur donnée
 * @param {number} length - longueur de la chaine à produire
 * @returns {string}
 * @private
 */
function _idGenerator(length) {
    let text = "";
    const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
        text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
    return text;
}

/***********************************************************************************************************************
 *  ETAPE 1 : Premières classes du domaine
 **********************************************************************************************************************/

/** Classe représentant une des 25 cellules de la carte clé */
class Cell { //TODO
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {number} position - l'indice de 0 à 24 de la carte (numérotation de gauche à droite et de haut en bas)
     * @param {string} color - la couleur de la cellule connue de l'espion uniquement ('red', 'blue', 'neutral' ou 'killer')
     */
    constructor({position: position, color: color} = {}){ //TODO: 2lignes
        this.position = position;
        this.color = color;
    }

}

/**
 * Classe représentant une des 25 cartes Mots affichées au joueur comme à l'espion
 * @extends Cell
 */
class WordCell extends Cell { //TODO
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {number} position - l'indice de 0 à 24 de la carte (numérotation de gauche à droite et de haut en bas)
     * @param {string} color - la couleur revélée au joueur ('red', 'blue', 'neutral','killer' ou par défaut 'unknown')
     * @param {string} word - le mot inscrit sur la carte
     */
	constructor({position: position, color: color, word: word}){
        super({position: position, color: color} = {});//TODO: 2lignes
        this._word = word;
	}
	//TODO: 6lignes

    set word(word) {
        this._word = word.toUpperCase();
    }

    get word() {
        return this._word;
    }
}

/***********************************************************************************************************************
 *  ETAPE 3 : Fonctions génératrices
 **********************************************************************************************************************/

/**
 * Génère des tableaux composés d'un même nombre de mots successifs d'une liste donnée,
 * sans altérer la liste et sans boucler.
 * @generator
 * @param {string[]} words - Tableau de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @yields {string[]} Tableau des mots suivants
 */
export function* nextWords(words, nbr){//TODO: 5lignes
    while (words.length !== 0) {
        yield Object.assign([], words.slice(0, nbr));
    }
}

/**
 * Génère des tableaux d'un même nombre de mots indéfiniment d'une liste donnée,
 * La liste est mélangée puis parcourue par paquet de mots jusqu'à ce qu'elle soit entièrement parcourue.
 * Ensuite, la liste est mélangée et à nouveau parcourue.
 * @param {Set<string>} words - Ensemble de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @yields {string[]} - Tableau des mots suivants
 */
export function* pickWords(wordsSet, nbr){//TODO: 5lignes

}

/**
 * Retourne un tableau de mots uniques tirés aléatoirement parmi tous les mots du jeu
 * @param {Set<string>} wordsSet - Ensemble de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @returns {string[]} - Tableau des mots aléatoires
 */
function simplePickWords(wordsSet, nbr) {//TODO: 3lignes, si problème avec fonction génératrice
}

/***********************************************************************************************************************
 *  ETAPE 4 : Dernière classe du domaine
 **********************************************************************************************************************/

/**
 * Classe représentant une partie de CodeNames
 */
export class Game {
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {string} user - Votre matricule
     * @param {string} idGame - Identifiant de la partie, connu de l'agent et de l'espion
     * @param {string} idSpy - Identifiant de l'espion, connu de l'espion uniquement
     * @param {number} turn - numéro du tour
     * @param {Cell[]} keyCard - Carte clé composée de 25 cellules, connue de l'espion uniquement
     * @param {string} keyCardColor - Couleur de la carte clé ("red" si 9 mots rouges, "blue" sinon)
     * @param {WordCell[]} wordCells - Les 25 mots
     * @param {string} clue - Dernier indice donné par l'espion, chaine vide par défaut
     * @param {number} clueNbr - Nombre de mots, désignables par l'agent, restants liés au dernier indice, 0 par défaut
     */
    constructor({user: user, idGame: idGame, idSpy: idSpy, turn: turn, keyCard: keyCard,
                    keyCardColor: keyCardColor, wordCells: wordCells, clue: clue, clueNbr:  clueNbr}){ //TODO: 9lignes
        this.user = user;
        this.idGame = idGame;
        this.idSpy = idSpy;
        this.turn = turn;
        this.keyCard = keyCard;
        this.keyCardColor = keyCardColor;
        this.wordCells = wordCells;
        this.clue = clue;
        this.clueNbr = clueNbr;
    }

    /**
     * Retourne l'état de la partie:
     *     - "LOST" si carte "killer" révélée ou si toutes les cartes "red" révélées,
     *     - "WIN" si toutes les cartes "blue" révélées,
     *     - "ACTIVE" par défaut
     * @returns {string}
     */
    get state(){ //TODO: 5lignes
        if (this.wordCells.find(current => current.color === "killer") || this.isRedWin()) return "LOST";

        let filtered = this.wordCells.filter(current => current.color === "blue");
        if (filtered.length === 9 && this.keyCardColor === "blue" ||
            filtered.length === 8 && this.keyCardColor === "red" ) return "WIN";

        return "ACTIVE";
    }

    isRedWin() {
        let filtered = this.wordCells.filter(current => current.color === "red");
        if (filtered.length === 9 && this.keyCardColor === "red" || filtered.length === 8 && this.keyCardColor === "blue") return true;
    }


    /**
     * Met à jour la couleur révélée du mot correspondant à la carte Mot reçue
     * @param {WordCell} wordCell - carte Mot avec la couleur révélée
     */
    revealWord(wordCell){//TODO: 1ligne
        this.wordCells[wordCell.position].color = wordCell.color;
    }
}

function getRandomNbrBetween1and2() {
    let randomNumber = Math.floor(Math.random() * (1 + 1));
    return randomNumber;
}

/**
 * Initialise une nouvelle partie:
 *     - générer les identifiants de partie (20 caractères) et de l'espion (6 caractères) grâce à _idGenerator()
 *     - déterminer aléatoirement la couleur de la carte clé ("red" ou "blue")
 *     - générer aléatoirement la carte clé composée de 25 cellules dont 1 "killer", 7 "neutral", 8 "red", 8 "blue" + 1 de la couleur de la carte clé
 *     - générer les 25 cartes mots avec la couleur "unknown"
 *     - initialiser le nombre de tours à 1
 *     - si la carte clé est de couleur rouge, révéler une des cartes "red" aléatoirement
 * @param {string} user - Votre matricule
 * @param {string[]} words - Tableau de 25 mots
 * @returns {Game}
 */
Game.generateNewGame = function(user, words){//TODO: 20lignes
    let idGame = _idGenerator(20);
    let idSpy = _idGenerator(6);
    let turn = 1;

    let colors = ["red", "blue"];
    let randomNumber = getRandomNbrBetween1and2();
    let keyCardColor = colors[randomNumber];
    return new Game({user, idGame,
        idSpy, turn, })

}


/***********************************************************************************************************************
*  ETAPE 3 : Fonctions génératrices
**********************************************************************************************************************/

/**
 * Génère des tableaux composés d'un même nombre de mots successifs d'une liste donnée,
 * sans altérer la liste et sans boucler.
 * @generator
 * @param {string[]} words - Tableau de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @yields {string[]} Tableau des mots suivants
 */
function* nextWords(words, nbr){ //TODO: 5lignes
}

/**
 * Génère des tableaux d'un même nombre de mots indéfiniment d'une liste donnée,
 * La liste est mélangée puis parcourue par paquet de mots jusqu'à ce qu'elle soit entièrement parcourue.
 * Ensuite, la liste est mélangée et à nouveau parcourue.
 * @param {Set<string>} words - Ensemble de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @yields {string[]} - Tableau des mots suivants
 */
function* pickWords(wordsSet, nbr){ //TODO: 5lignes
}

/**
 * Retourne un tableau de mots uniques tirés aléatoirement parmi tous les mots du jeu
 * @param {Set<string>} wordsSet - Ensemble de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @returns {string[]} - Tableau des mots aléatoires
 */
function simplePickWords(wordsSet, nbr){ //TODO: 3lignes, si problème avec fonction génératrice
}

/***********************************************************************************************************************
 *  ETAPE 4 : Dernière classe du domaine
 **********************************************************************************************************************/

/**
 * Classe représentant une partie de CodeNames
 */
class Game {
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {string} user - Votre matricule
     * @param {string} idGame - Identifiant de la partie, connu de l'agent et de l'espion
     * @param {string} idSpy - Identifiant de l'espion, connu de l'espion uniquement
     * @param {number} turn - numéro du tour
     * @param {Cell[]} keyCard - Carte clé composée de 25 cellules, connue de l'espion uniquement
     * @param {string} keyCardColor - Couleur de la carte clé ("red" si 9 mots rouges, "blue" sinon)
     * @param {WordCell[]} wordCells - Les 25 mots
     * @param {string} clue - Dernier indice donné par l'espion, chaine vide par défaut
     * @param {number} clueNbr - Nombre de mots, désignables par l'agent, restants liés au dernier indice, 0 par défaut
	 */
    constructor(){ //TODO: 9lignes
    }

    /**
     * Retourne l'état de la partie:
     *     - "LOST" si carte "killer" révélée ou si toutes les cartes "red" révélées,
     *     - "WIN" si toutes les cartes "blue" révélées,
     *     - "ACTIVE" par défaut
     * @returns {string}
     */
    state(){ //TODO: 5lignes		
    }

    /**
     * Met à jour la couleur révélée du mot correspondant à la carte Mot reçue
     * @param {WordCell} wordCell - carte Mot avec la couleur révélée
     */
    revealWord(wordCell){ //TODO: 1ligne        
    }
}

/**
 * Initialise une nouvelle partie:
 *     - générer les identifiants de partie (20 caractères) et de l'espion (6 caractères) grâce à _idGenerator()
 *     - déterminer aléatoirement la couleur de la carte clé ("red" ou "blue")
 *     - générer aléatoirement la carte clé composée de 25 cellules dont 1 "killer", 7 "neutral", 8 "red", 8 "blue" + 1 de la couleur de la carte clé
 *     - générer les 25 cartes mots avec la couleur "unknown"
 *     - initialiser le nombre de tours à 1
 *     - si la carte clé est de couleur rouge, révéler une des cartes "red" aléatoirement
 * @param {string} user - Votre matricule
 * @param {string[]} words - Tableau de 25 mots
 * @returns {Game}
 */
Game.generateNewGame = function(user, words){ //TODO: 20lignes	
}