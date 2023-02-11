setTimeout(() => console.log("Attends 100 ms"), 1000);

function fonction(succescallback, errorcallback) {
    setTimeout(() => {
        if(1 === 1) succescallback(1);
        else errorcallback(0);
    }, 1000);
}

let resultat = new Promise(function(resolve, reject){
    setTimeout(()=> {
        let a = Math.round(Math.random()*10);
        a  % 2 === 0 ? resolve(a): reject(a);
    },3000);
});
console.log(`promesse en attente...`);
resultat.then(function(value){
    console.log(`promesse résolue: nombre pair ${value}`);
}).catch(function(error){
    console.log(`promesse rejetée: nombre impair ${error}`);
});

// Promise all catch en cas d'erreur alors que Promise.allSettled renvoie toutes les promesse

//Chainage de promesse

let resultat = new Promise((resolve, reject) =>  { resolve(10);});
resultat.then(v => {
    console.log(`valeur de v: ${v}`);
    return 15;
}).then(v => {
    console.log(`valeur de v: ${v}`);
    throw new Error(20);
}).catch(e => {
    console.log(`erreur: ${e.message}`);
    return 25;
}).then(v => {
    console.log(`valeur de v: ${v}`);
});

