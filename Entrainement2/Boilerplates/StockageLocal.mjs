// Cookies
document.cookie = "student=e123456";
document.cookie = "student=e123456; expires=Thu, 5 Mar 2019 15:37:00 UTC; path=/~p246810/students";

function setCookie(cle,valeur,nbrSecondes) {
    let d = new Date();
    d.setTime(d.getTime() + (nbrSecondes*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cle + "=" + valeur + ";" + expires + ";path=/";
}


function getCookie(cle) {
    let cookies = decodeURIComponent(document.cookie).split(';');
    let valeur = "";
    cookies.forEach(c => {
        c = c.trim();
        if(c.indexOf(cle) == 0){
            valeur = c.slice(cle.length+1).trim();
        }
    });
    return valeur;
}

document.cookie = "student=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
setCookie("student","", -1); // Suppression cookie

// Session storage
sessionStorage.setItem(cle, valeur);
sessionStorage.cle = valeur;
let valeur = sessionStorage.getItem(cle);
sessionStorage.removeItem(cle);
sessionStorage.clear();
for (let i=0; i < sessionStorage.length; i++) {
    let cle = sessionStorage.key(i);
    console.log(cle);
}

let asPique = new Carte('Pique', 'As');
sessionStorage.setItem('atout', JSON.stringify(asPique));

//Sauvegarde et restauration d'un objet
class Carte {
    constructor(couleur, valeur){
        this.couleur = couleur;
        this.valeur = valeur;
    }
    toFullString(){
        return `${this.valeur} de ${this.couleur}`;
    }
}
let carteObj = JSON.parse(sessionStorage.getItem('atout'));
console.log(carteObj.toFullString()); //undefined !
let carte = Object.assign(new Carte(), carteObj);
console.log(carte.toFullString()); //As de Pique

// LocalStorage
//Les URLs suivantes ont des origines différentes
/*http://www.helmo.be
https://www.helmo.be
http://www.helmo.be:5000
http://www.uliege.be*/
//Au contraire ces URLs ont la même origine:
/*http://www.helmo.be
// http://www.helmo.be/info/contact.html*/

localStorage.setItem(cle, valeur);
let valeur = localStorage.getItem(cle);
localStorage.removeItem(cle);
localStorage.clear();
for (let i=0; i < localStorage.length; i++) {
    let cle = localStorage.key(i);
}
