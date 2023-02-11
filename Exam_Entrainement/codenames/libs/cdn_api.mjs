
import {WordCell} from './cdn_modeles.mjs';
const CODENAMES_URL = 'https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php';

/***********************************************************************************************************************
 *  ETAPE 2 : Premièrs appels AJAX
 **********************************************************************************************************************/

/**
 * Obtention de tous les mots du jeu.
 * Effectue une requête GET vers https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php
 * avec le paramètre "words" à 1.
 * Le tableau de string reçu est retourné sous forme d'un ensemble de chaines de caractères.
 * En cas d'erreur, un ensemble vide est retourné.
 * @returns {Promise<Set<string>>}
 */
export function getWords(){ //TODO: 17lignes
    return fetch(`${CODENAMES_URL}?words=1`)
        .then(response => {
            if (!response.ok){
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            return response
        })
        // Récupère tout le contenu du corps.
        .then(response=> response.json())
        .then(response => {
            let returnedSet = new Set();
            for (let currentElement of response) {
                returnedSet.add(currentElement);
            }
            return returnedSet;
        })
        .catch(error => {
            console.log(`Exception: ${error.message}`);
        })
}

/**
 * Révélation d'un mot désigné par l'agent
 * Effectue une requête POST vers https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php
 * avec les paramètres "user", "idGame" et "word"
 * La réponse HTTP retournée contient :
 *  {"status" : "OK", "message" : "", "wordCell" : mot} en cas de succès
 * ou
 *  {"status" : "ERROR", "message" : "message d’erreur", "wordCell" : ""} en cas d'erreur.
 *  La promesse retourne une exception avec le message en cas d'erreur, une instance WordCell en cas de succès
 * @param {string} user - Votre matricule
 * @param {string} idGame - L'identifiant de la partie
 * @param {string} word - Le mot contenu dans la carte WordCell désignée par l'agent
 * @returns {Promise<WordCell|Error>}
 */
export function postWord({user, idGame, word}={}){//TODO: 12lignes
    let postInfo = JSON.stringify({user: user, idGame: idGame, word: word});
    return fetch(CODENAMES_URL, {method: "POST", body: postInfo})
        .then(response => {
            if (!response.ok){
                return new Error(response.message);
            }
            return response
        })
        // Récupère tout le contenu du corps.
        .then(response=> response.json())
        .then(response => {
            return Object.assign(new WordCell(), response.wordCell);
        })
        .catch(error => {
            return `Exception: ${error.message}`;
        })

}

/***********************************************************************************************************************
 *  ETAPE 5 : Derniers appels AJAX
 **********************************************************************************************************************/

/**
 * Sauvegarde d'une partie sur le serveur
 * Effectue une requête POST vers https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php
 * avec le paramètre "game" qui vaut l'objet Game à sauvegarder
 * La réponse HTTP retournée contient :
 *  {"statut" : "ERROR", "message" : "message d’erreur"} en cas d'erreur
 *  ou {"statut" : "OK", "message" : "message de confirmation"} en cas de succès.
 * La promesse retourne une exception avec le message en cas d'erreur ou le message en cas de succès.
 * @param {Game} game - Partie à sauvegarder
 * @returns {Promise<String|Error>}
 */
export function postGame(game){
    let id = game.idGame;
    let postInfo = JSON.stringify({idGame: id, user: game.user, idSpy: game.idSpy, turn: game.turn, keyCard: game.keyCard, keyCardColor:
        game.keyCardColor, wordCells: game.wordCells, clue: game.clue, clueNbr: game.clueNbr});
    return fetch(CODENAMES_URL, {method: "POST", body: postInfo})
        .then(response => {
            if (!response.ok){
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            return response;
        })
        .then (response => response.json())
        .then (response => {
            return response;
        })
        .catch(error => {
            return `Exception: ${error.message}`;
        })
}

/**
 * Obtention d'une partie à partie du serveur
 * Effectue une requête GET vers https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php
 * avec les paramètres "user", "idGame" obligatoires,
 * avec le paramètre supplémentaire "idSpy" si la partie est lue par l'espion (dans ce cas, la propriété keyCard sera reçue)
 * Si le paramètre "idSpy" est absent, alors la partie est lue par l'agent (dans ce cas, l'objet reçu n'a pas la propriété keyCard)
 * La réponse HTTP retournée contient :
 *  {"status" : "OK", "message" : "", "game" : partie} en cas de succès
 * ou
 *  {"status" : "ERROR", "message" : "message d’erreur", "game" : ""} en cas d'erreur.
 *  La promesse retourne une exception avec le message en cas d'erreur, une instance Game en cas de succès
 * @param {string} user - Votre matricule
 * @param {string} idGame - L'identifiant de la partie
 * @param {string} idSpy - L'identifiant de l'espion, éventuellement vide si agent
 * @returns {Promise<Game|Error>}
 */
export function getGame({user, idGame, idSpy=''}={}){//TODO: 18lignes
    let finalUrl;
    if (idSpy === '') {
        finalUrl = `${CODENAMES_URL}?user=${user}&idGame=${idGame}`;
    } else {
        finalUrl = `${CODENAMES_URL}?user=${user}&idGame=${idGame}&idSpy=${idSpy}`;
    }
    return fetch(finalUrl)
        .then(response => {
            if (!response.ok){
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            return response;
        })
        .then (response => response.json())
        .then (response => {
            return Object.assign(new WordCell(), response.Game);
        })
        .catch(error => {
            return `Exception: ${error.message}`;
        })
}


/***********************************************************************************************************************
 *  ETAPE 7 : Rafraichissement automatique (SSE)
 **********************************************************************************************************************/


/**
 * Connexion au flux SSE de mise à jour d'une partie
 * Effectue une requête GET vers https://dartagnan.cg.helmo.be/~p150107/js2/codenames/codenames.php
 * avec les paramètres "user", "idGame" et "sse" à "on".
 * @param {string} user - Votre matricule
 * @param {string} idGame - Identifiant de la partie
 * @returns {EventSource}
 */
export function getSSE({user, idGame}={}){ //TODO: 1ligne
    return new EventSource(`http://dartagnan.cg.helmo.be/~p150107/tutoriels/js-comet/exercices/suite.php?user=${user}&idGame=${idGame}&sse=on`)
}