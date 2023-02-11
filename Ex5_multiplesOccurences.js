

// Créez la fonction multiplesOccurences() qui reçoit un tableau d'entiers et retourne un tableau qui contient les valeurs présentes plus d'une fois.
//
// S'il n'y en a pas, la fonction retourne un tableau vide.

let tab = [5,2,36,9,45,5,7,6,12,9,26];
tab = multiplesOccurences(tab); // [5,9]
console.log(tab);

let tab2 = [5,2];
tab2 = multiplesOccurences(tab2); // []
console.log(tab2);


function multiplesOccurences(array) {
    let newArray = [];

    array.forEach(function (value) {
        // Vérifie le nombre de fois que la valeure va exister
        let filteredArray = array.filter(x =>
            value === x );
        // Vérifie si elle est déjà notée dans le tableau de résultats
        let alreadyExist = newArray.find(x => x === filteredArray[0]);

        // Ajoute la valeur si elle rempli les 2 conditions
        if (filteredArray.length > 1 && !alreadyExist) newArray.push(filteredArray[0]);
    })

    return newArray;
}