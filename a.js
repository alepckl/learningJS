let resultats = [
    {nom: "Bakaire", prenom: "Joséphina", interro: 15, qcm: 8, projet: 13.9, examen: 38.2},
    {nom: "Dhour", prenom: "Youssunn", interro: 16, qcm: 4.6, projet: 14.7, examen: 31.9},
    {nom: "Dupont", prenom: "Marcel", interro: 8.5, qcm: 7, projet: 12.6, examen: 26.8},
    {nom: "Mei", prenom: "Linn", interro: 6, qcm: 7.5, projet: 13, examen: 22.6},
    {nom: "Potte", prenom: "Henri", interro: "PP", qcm: 2.6, projet: 8.2, examen: 16.6}
]

function moyenneEleve(resultats){
    let newTab = [];
    let cote;
    resultats.forEach(function (value) {
        cote = ((value.interro + value.qcm + value.projet + value.examen) / 100) * 20;
        newTab.push({
            nom: value.nom,
            prenom: value.prenom,
            cote: ((value.interro + value.qcm + value.projet + value.examen) / 100) * 20
        })
    })
    return newTab;
}
let moyenneIndividuelle = moyenneEleve(resultats);

function moyenneClasse(moyenneIndividuelle){
    let cote = 0;
    moyenneIndividuelle.forEach(function (value) {
        if(!isNaN(value.cote)) {
            cote += value.cote;
        }
    })
    let coteMoyenne = cote*100;
    return Math.round(coteMoyenne / 5)/100;
}
console.log("La moyenne est de : " + moyenneClasse(moyenneIndividuelle) + "/20");

function bestNote(moyenneIndividuelle){
    let bestStudent = {};
    moyenneIndividuelle.forEach(function (value) {
        if(!isNaN(value.cote)) {
            bestStudent = moyenneIndividuelle.find(x => x.cote > value.cote);
        }
    })
    return bestStudent
}
let notearround = bestNote(moyenneIndividuelle);
console.log("La meilleure note est de : " + bestNote(moyenneIndividuelle).cote + "/20 " + bestNote(moyenneIndividuelle).nom);

function faibleNote(moyenneIndividuelle){
    let worstStudent = 0;
    moyenneIndividuelle.forEach(function (value) {
        let v = moyenneIndividuelle.find(x => x.cote < value.cote);
        if(v) worstStudent = v;
    })
    return worstStudent;
}
console.log(`La note la plus faible est de : ${faibleNote(moyenneIndividuelle).cote}/20 (${faibleNote(moyenneIndividuelle).nom})`)