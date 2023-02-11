export {Cell,WordCell, Game, nextWords, pickWords}

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
class Cell { //TODO done
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {number} position - l'indice de 0 à 24 de la carte (numérotation de gauche à droite et de haut en bas)
     * @param {string} color - la couleur de la cellule connue de l'espion uniquement ('red', 'blue', 'neutral' ou 'killer')
     */
    constructor({position,color}={}){ //TODO: 2lignes done
        this.position = position
        this.color = color
    }

}

/**
 * Classe représentant une des 25 cartes Mots affichées au joueur comme à l'espion
 * @extends Cell
 */
class WordCell extends Cell{ //TODO
    /**
     * /!\ Affectation par décomposition d'un objet:
     * @param {number} position - l'indice de 0 à 24 de la carte (numérotation de gauche à droite et de haut en bas)
     * @param {string} color - la couleur revélée au joueur ('red', 'blue', 'neutral','killer' ou par défaut 'unknown')
     * @param {string} word - le mot inscrit sur la carte
     */
	constructor({position,color,word}={}){ //TODO: 2lignes
	    super({position,color})
        this.word = word
    }

    get word(){
        return this._word;
    }
    set word(w){
        if(w)
            this._word = w.toUpperCase();
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
function* nextWords(words, nbr){ //TODO: 5lignes
    let w = words
    let count = 0
    // Continue de boucler tant que le compteur plus le nombre de mot à obtenir est plus petit ou égal à notre tableau
    while(count+nbr<=w.length){
        yield w.slice(count,count+nbr)
        count += nbr
    }
}

/**
 * Génère des tableaux d'un même nombre de mots indéfiniment d'une liste donnée,
 * La liste est mélangée puis parcourue par paquet de mots jusqu'à ce qu'elle soit entièrement parcourue.
 * Ensuite, la liste est mélangée et à nouveau parcourue.
 * @param {Set<string>} wordsSet - Ensemble de tous les mots du jeu
 * @param {number} nbr - Nombre de mots à obtenir
 * @yields {string[]} - Tableau des mots suivants
 */
function* pickWords(wordsSet, nbr){//TODO: 5lignes
    while(true){
        let shuffledArray = Array.from(wordsSet).sort((a, b) => 0.5 - Math.random());
        let n = nextWords(shuffledArray,nbr)
        let val = n.next()
        while (!val.done){
            yield val.value
        }
    }
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
    constructor({user,idGame,idSpy,turn,keyCard,keyCardColor,wordCells,clue,clueNbr=0}={}){ //TODO: 9lignes
        this.user = user
        this.idGame = idGame
        this.idSpy = idSpy
        this.turn = turn
        this.keyCard = keyCard
        this.keyCardColor = keyCardColor
        this.wordCells = wordCells
        this.clue = clue
        this.clueNbr = clueNbr
    }


    /**
     * Retourne l'état de la partie:
     *     - "LOST" si carte "killer" révélée ou si toutes les cartes "red" révélées,
     *     - "WIN" si toutes les cartes "blue" révélées,
     *     - "ACTIVE" par défaut
     * @returns {string}
     */
    get state(){ //TODO: 5lignes

        if(this.countRed()|| this.isKilled())
            return "LOST"
        if(this.countBlue())
            return "WIN"
        return "ACTIVE"

    }

    countRed() {
        let redCount = this.wordCells.filter(w => w.color==="red").length
        return (this.keyCardColor === 'red'&&redCount===9 || this.keyCardColor === 'blue' && redCount===8)
    }

    countBlue() {
        let blueCount = this.wordCells.filter(w => w.color==="blue").length
        return (this.keyCardColor === 'red'&& blueCount===8 || this.keyCardColor === 'blue' && blueCount===9)
    }

    isKilled(){
        return this.wordCells.find(w => w.color === "killer") !== undefined
    }

    /**
     * Met à jour la couleur révélée du mot correspondant à la carte Mot reçue
     * @param {WordCell} wordCell - carte Mot avec la couleur révélée
     */
    revealWord(wordCell){ //TODO: 1ligne
        let e = this.wordCells.find(e=>e.word===wordCell.word)
        if(e !==undefined)
            e.color = wordCell.color
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
    let idGame = _idGenerator(20)
    let idSpy = _idGenerator(6)
    let keyCardColor = getRandomColor()
    let keyCard = generateKeyCard(keyCardColor)
    let wordCells =  generateWordCells(words)
    let turn = 1
    if(keyCardColor === "red")
        wordCells[keyCard.find(c=>c.color==="red").position].color = "red"
    return new Game({user :user,idGame : idGame,idSpy : idSpy,turn : turn,keyCard : keyCard, keyCardColor : keyCardColor,wordCells: wordCells,clue : "",clueNbr : 0})
}

/**
 *
 * @param words
 * @returns {WordCell[]}
 */
function generateWordCells(words) {
    let wordCells = []
    for (let i = 0; i < words.length; i++)
        wordCells.push(new WordCell({position : i,color :"unknown",word : words[i]}))
    return wordCells

}

/**
 *
 * @param keyCardColor
 * @returns {Cell[]}
 */
function generateKeyCard(keyCardColor) {
    let cards = []
    let pos = 0
    for (let i = 0; i < 7; i++) {
        cards.push(new Cell({position : pos,color : "neutral"}))
        pos++
    }
    for (let i = 0; i < 8; i++) {
        cards.push(new Cell({position : pos,color : "red"}))
        pos++
        cards.push(new Cell({position : pos,color : "blue"}))
        pos++
    }
    cards.push(new Cell({position : pos,color : "killer"}))

    if(keyCardColor==="blue")
        cards.push(new Cell({position : pos,color : "blue"}))
    else
        cards.push(new Cell({position : pos,color : "red"}))
    return cards.sort((a, b) => 0.5 - Math.random());
}
function getRandomColor() {
    if(Math.random()>0.5)
        return "blue"
    return "red"
}