/*
* Vous avez accès aux webservices suivants à l'adresse https://dartagnan.cg.helmo.be/~p150107/js2/qcm/annuaire.php:
*    - requête GET avec le paramètre "courriel" retourne une chaine JSON représentant un objet avec les propriétés "nom" et "prenom"
*    - requête POST avec les paramètres "matricule" et "cle" retourne une chaine JSON représentant un objet avec les propriétés "nom" et "prenom"
*    Lorsque le courriel ou le matricule n'existe pas dans l'annuaire, les noms et prénoms contiennent la chaine "Non trouvé".
* La clé est une valeur constante qui vaut "XAZ568".
* Créez la fonction verifieNomPrenom({matricule, courriel} = {}) qui appelle les 2 webservices et retourne
* une promesse dont la valeur est un objet {correct, parCourriel, parMatricule} :
*      - correct est un booléen vrai si les noms et prénoms retournés par les webservices sont identiques ET existent,
*      - parCourriel est l'objet {nom, prenom} retourné par la requête GET
*      - parMatricule est l'objet {nom, prenom} retourné par la requête POST
 */
const CLE="XAZ568";
const URL_ANNUAIRE = "https://dartagnan.cg.helmo.be/~p150107/js2/qcm/annuaire.php";


    function checkValue(value) {
        if (value[0].nom === value[1].nom && value[0].prenom === value[1].prenom) return true;
        return false;
    }

    function getPromiseByPost(matricule) {
        let postInfo = JSON.stringify({matricule: matricule, cle: CLE})

        fetch(URL_ANNUAIRE, {method:"POST", body:postInfo})
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                return response;
            })
            .then(response => response.json())
    }

    function getPromiseByGet(courriel) {
        fetch(`${URL_ANNUAIRE}?courriel=${courriel}`)
            .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response;
            })
            .then(response => response.json())
    }

    function verifieNomPrenom({matricule, courriel} = {}) {
        return Promise.all([getPromiseByGet(courriel), getPromiseByPost(matricule)])
            .then(value => {
                return {correct: checkValue(value), parCourriel: {nom: value[0].nom, prenom: value[0].prenom}, parMatricule: {nom: value[1].nom, prenom: value[1].prenom}}
            })
    }



//

const CLE="XAZ568";
const URL_ANNUAIRE="https://dartagnan.cg.helmo.be/~p150107/js2/qcm/annuaire.php";
function nomPrenom({matricule, courriel} = {}) {
    let data = JSON.stringify({matricule: matricule, cle: CLE});
    const ajaxInPost = fetch(URL_ANNUAIRE, {method: 'post', body: data});
    const ajaxInGet = fetch(`${URL_ANNUAIRE}?courriel=${courriel}`)

    return Promise.race(fetch(`${URL_ANNUAIRE}?courriel=${courriel}`), fetch(URL_ANNUAIRE, {method: 'post', body: data}))
        .then(response => {
            if (!response.ok) {
                return new Error()
            }
            return response;
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}

function verifieNomPrenom({matricule, courriel} = {}) {
    return Promise.all([getPromiseByPost(matricule), getPromiseByGet(courriel)])
        .then(response => {
            const parCourriel = {nom: response[0].nom, prenom: response[0].prenom};
            const parMatricule = {nom: response[1].nom, prenom: response[1].prenom};
            return {correct: verifyValues(response), parCourriel: parCourriel, parMatricule: parMatricule};
        })
        .catch(error => {
            console.log(error);
        })
}

function getPromiseByPost(matricule) {
    let postInfo = JSON.stringify({matricule: matricule, cle: CLE})

    return fetch(URL_ANNUAIRE, {method:"POST", body:postInfo})
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response;
        })
        .then(response => response.json())
}

function getPromiseByGet(courriel) {
    return fetch(`${URL_ANNUAIRE}?courriel=${courriel}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response;
        })
        .then(response => response.json())
}

function verifyValues(value) {
    if (value[0].nom === "Non trouvé" && value[0].prenom === "Non trouvé") return false;
    if (value[0].nom === value[1].nom && value[0].prenom === value[1].prenom) return true;
    return false;
}