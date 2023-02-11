let obj = {};
obj.prop = "";
obj["prop"] = "property";

obj.prop2 = "";
delete(obj.prop2);
console.log(obj?.["prop2"] === undefined);
console.log(obj.hasOwnProperty('prop2'));
Object.keys(obj).forEach(key => console.log(obj[key]));
let json = JSON.stringify(obj);
let obj2 = JSON.parse(json);
console.log(json);
console.log(obj2);

// Copie la référence
obj2 = obj;
// Copie complete (sans méthodes et perte de certaines valeurs)
obj2 = JSON.parse(JSON.stringify(obj));
// shallow copy
obj2 = Object.assign({}, obj);
obj2 = {
    ...obj,
    name: "obj2"
};

// Copie complete et profonde (librairies)
/*const clone = require('lodash.clonedeep');
obj2 = clone(obj);*/

// Decomposition
let dossards = ["#5687", "#4857", "#3879", "#2198", "#7832"];
let [premier, second, ...peloton] = dossards;

/*Invocation indirecte de méthode
call: les arguments de la fonction sont passés en liste d'arguments,
apply: les arguments de la fonction sont passés comme valeurs d'un tableau.
bind: création d'une copie de la fonction pour laquelle this est un objet donné. */

// this = contexte d'invocation de la fonction

// Objets itérables : Array, String, Set, Map (String n'a pas de forEach => boucle indicée)

let map = new Map();
map.size; map.clear(); map.get("key"); map.has("key"); map.set("key", "val");
map.delete("key"); map.keys(); map.values(); map.entries();

let set = new Set(); set.size; set.clear(); set.has(0); set.add(0); set.delete(0);
set.values(); set.keys(); set.entries();

