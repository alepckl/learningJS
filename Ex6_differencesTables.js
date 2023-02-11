let a = ["a","b","c","d","e","f"];
let b = ["a","b","j","j"];
let c = ["b","a"];
let d = [];
console.log(differencesTables(a,b)); //[ 'c', 'd', 'e', 'f', 'j', 'j' ]
console.log(differencesTables(a,c)); //[ 'c', 'd', 'e', 'f' ]
console.log(differencesTables(a,d)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(differencesTables(a,a)); //[]


function differencesTables(arrayA, arrayB) {
    let newArray = [];

    // Vérifie si la valeur courante dans le tableau A est contenue dans le tableau B. -> NON ---> ALORS AJOUTE

    let filterA = arrayA.filter(val => b.every(x => x !== val));

    // Vérifie si la valeur courante dans le tableau B est contenue dans le tableau A.
    let filterB = arrayB.filter(val => a.every(x => x !== val));

    return filterA.push(...filterB);


    for (const a of arrayA) {
        let currentArray = arrayB.filter(currentValue => currentValue === a);
        //console.log(currentArray);
        if (currentArray.length === 0) {
            newArray.push(a);
        }
    }

    for (const a of arrayB) {
        let currentArray = arrayB.filter(currentValue => currentValue === a);
        if (currentArray.length === 0) {
            newArray.push(a);
        }
    }
    return newArray;
}