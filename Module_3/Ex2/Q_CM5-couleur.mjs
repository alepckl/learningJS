/*
Dans un fichier nommé 'Q_CM5-couleur.mjs', créez un module qui expose les 2 éléments suivants:
*      - la classe Couleur avec les propriétés r, g et b entiers avec valeur entre 0 et 255, et le getter rgb() qui
*      retourne le code couleur hexadécimal: #RGB .
*      (Exemple: let c = new Couleur(10,255,7); console.log(c.rgb); //affiche #0AFF07)
*      - la fonction convertirEnCouleur(rgb) qui reçoit un code couleur hexadécimal et retourne un objet Couleur correspondant.
*      (Exemple: let c = convertirEnCouleur('#0AFF07'); console.log(c); //affiche {r: 10, g: 255, b: 7}
 */

export class Couleur {
    constructor(r, g, b) {
        this.r = parseInt(r);
        this.g = parseInt(g);
        this.b = parseInt(b);
    }

    get rgb() {
        function getHexa(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;

        }
        return ("#" + getHexa(this.r) + getHexa(this.g) + getHexa(this.b)).toUpperCase();
    }
}


export function convertirEnCouleur(rgb) {
    let red = parseInt(rgb.slice(1, 3), 16);
    let green = parseInt(rgb.slice(3, 5), 16);
    let blue = parseInt(rgb.slice(5, 7), 16);

    return new Couleur(red, green, blue);
}