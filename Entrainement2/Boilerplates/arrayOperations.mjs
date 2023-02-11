

let array = [];

array[array.length] = 1;
array.push(1);

array.splice(0, 1);
// Dernier element
array.pop();

array.forEach(value => console.log);
array.map(value => value+1);
//Garde les nombres pairs > 0
array.filter((x,i) => i%2===0 && x > 0);
//Premiere valeur ou fonction renvoie true
array.find(x => x > 0);
//Premier indice ou fonction renvoie true
array.findIndex(x => x > 0);
//True si fonction renvoie true pour tous les éléments
array.every(x => x > 0);
//True si fonction true au moins 1 fois
array.some(x => x > 0);
// Reduit le tableau a une valeur
array.reduce((acc, val, index) => acc + (index === 0) ? val : 0, 0);
// Idem mais de droite a gauche
array.reduceRight((acc, val, index) => acc + (index === 0) ? val : 0, 0);
//Trie un tableau sur base de fonction => positive si a > b, négative si a < b et nulle si a == b.
// Ici trie dans ordre croissant
array.sort((a, b) => a - b);
