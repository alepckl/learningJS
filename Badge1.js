/**let produits = {'fromage abbaye': 6.09, 'Pinot Gris Alsace': 4.99, 'echantillon shampoing': 0}

let t = obtenirPrix('Pinot Gris Alsace');

console.log(`${obtenirPrix('Pinot Gris Alsace')}`);

function obtenirPrix(produit) {
    let producePrice = produits[produit];
    if (producePrice === undefined) return 'Non trouvé';
    if (producePrice === 0 || producePrice === null) return 'Gratuit';
    return producePrice;
}**/

/**let produits = {'fromage abbaye': '6.09€', 'Pinot Gris Alsace': '4.99€', 'échantillon shampoing': 'Gratuit'}

console.log(`${valeurPrix('Pinot Gris Alsace')}`);




class ProductNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = ProductNotFoundError;
    }
}

function valeurPrix(produit) {
    let price = produits[produit];
    if (price === 'Gratuit') return 0;
    if (price === undefined) throw new ProductNotFoundError;
    console.log(price.substring(0, price.length -1));
    return parseFloat(price.substring(0, price.length -1));
}**/

let count = 1;
let currentNumber = '';
for (let i = 0; i <= 2; i++) {
    for (let entierEulerElement of entierEuler()) {
        if (count % 3 === 0) {
            currentNumber += entierEulerElement.toString();
            console.log(`Matricule N°${count / 3} : ${currentNumber}`);
            currentNumber = '';
        } else {
            currentNumber += entierEulerElement.toString();
        }
        count++;
    }
}


function* entierEuler() {
    for (let i = 0; i <= 40; i++) {
        yield (i*i) + i + 41;
    }
}

function* matricule() {
    let count = 1;
    let currentNumber = '';
    let euler = entierEuler();
    for (let entierEulerElement of euler) {
        console.log("oapgoaerg,kaergkaekg,aeg")
        console.log(count);
        if (count % 3 === 0) {
            currentNumber += entierEulerElement.toString();
            console.log(currentNumber);
            yield currentNumber;
            currentNumber = '';
        } else {
            currentNumber.concat(entierEulerElement.toString(), currentNumber);
        }
        count++;
    }
}