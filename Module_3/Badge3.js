
/** Déclarez la classe Personne avec:
 *    les propriétés: idUser, nom, prenom,
 *    un constructeur qui reçoit un objet {idUser, nom, prenom} avec comme valeurs par défaut 0 pour idUser et '---' pour nom et prénom
 *    un getter nomPrenom() qui retourne la chaine constituée du nom en majuscules suivi d'un espace puis du prénom : "NOM prenom"
 * Déclarez la classe Utilisateur qui hérite de Personne avec:
 *    les propriétés: login, motPasse
 *    la méthode verifieMotPasse() qui retourne True si le mot de passe est différent du nom, du prénom et du login, False sinon.
 * Vos constructeurs doivent utiliser l'affectation par décomposition (donc le constructeur d'Utilisateur reçoit un objet avec 5 propriétés).*/
class Personne {
    constructor({idUser = 0, nom = '---', prenom = '---'} = {}) {
        this.idUser = idUser;
        this.nom = nom;
        this.prenom = prenom;
    }

    get nomPrenom() {
        return `${this.nom.toUpperCase()} ${this.prenom}`;
    }

}

class Utilisateur extends Personne {
    constructor({idUser, nom, prenom, login, password} = {}) {
        super({idUser, nom, prenom});
        this.login = login;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;

    }

    verifieMotPasse() {
        if (this.password !== this.login && this.password !== this.prenom, this.password !== this.nom) return true;

        return false
    }
}