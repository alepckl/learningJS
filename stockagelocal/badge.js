/**
 * Créez la classe Carte contenant deux propriétés:
 *    - couleur: 'Carreau', 'Coeur', 'Pique', 'Trèfle'.
 *    - valeur: 'As', 2,3,..., 9, 10, 'Valet', 'Dame', 'Roi'.
 *     et deux méthodes:
 *     - le constructeur qui utilise l'affectation par décomposition d'un objet {couleur, valeur}
 *     - la méthode affiche() qui retourne la carte sous forme de la chaine "valeur de couleur". (Exemple: As de Pique).
 * Créez la classe Main contenant une propriété:
 *    - cartes: tableau de Cartes
 *    et la méthode nbrCartes(couleur) qui retourne le nombre de cartes de la main de la couleur donnée.
 * Créez, en dehors de la classe, les fonctions:
 *   - sauvegarde(main) qui sauvegarde la main tant que la session est ouverte avec la clé 'MAIN'
 *   - restaure() qui retourne la main sauvegardée
 */

const KEY = "MAIN";
class Carte {

    constructor({couleur, valeur} = {}) {
        this.couleur = couleur
        this.valeur = valeur
    }

    affiche() {
        return `${this.valeur} de ${this.couleur}`
    }
}

class Main {

    constructor(main) {
        this.main = main
    }

    nbrCartes(couleur) {
        let count = 0;
        this.main.forEach(x => {
            if (x.couleur === couleur) count++;
        })
        return count;
    }
}

function sauvegarde(main) {
    sessionStorage.setItem(KEY, JSON.stringify(main));
}

function restaure() {
    return JSON.parse(sessionStorage.getItem(KEY));
}