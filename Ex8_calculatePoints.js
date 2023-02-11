let resultats = [
    {nom: "Dhour", prenom: "Youssunn", interro: 16, qcm: 4.6, projet: 14.7, examen: 31.9},
    {nom: "Dupont", prenom: "Marcel", interro: 8.5, qcm: 7, projet: 12.6, examen: 26.8},
    {nom: "Potte", prenom: "Henri", interro: "PP", qcm: 2.6, projet: 8.2, examen: 16.6},
    {nom: "Mei", prenom: "Linn", interro: 6, qcm: 7.5, projet: 13, examen: 22.6},
    {nom: "Bakaire", prenom: "Joséphina", interro: 15, qcm: 8, projet: 13.9, examen: 38.2}
];

let arrayNotes = getAllNotes(resultats);

console.log(arrayNotes);

console.log(`La moyenne est de : ${getAverage(arrayNotes)}`);

let bestStudent = getNotesASC(arrayNotes);
console.log(bestStudent)
console.log(`La meilleure note est de : ${bestStudent[0].notes} (${bestStudent[0].nom})`);

console.log(`La pire note est de : ${bestStudent[bestStudent.length -1].notes} (${bestStudent[bestStudent.length -1].nom})`)


function getNotesASC(notes) {
    return notes.sort((a, b) => a.notes - b.notes);
}


function getAllNotes(results) {
    return results.Map(function(currentStudents) {
        let currentNote = getSumOfNotes(currentStudents) / length;
        if (currentNote) {
            return {
                    nom: currentStudents.nom,
                    prenom: currentStudents.prenom,
                    notes: currentNote,
                    };
        }
    })

    function getSumOfNotes(currentStudents) {
        return currentStudents.interro + currentStudents.qcm + currentStudents.projet + currentStudents.examen
    }
}

function getAverage(notes) {
    let average = 0;
    for (let currentNote of notes) {
        if (currentNote.notes) {
            average += currentNote.notes;
        }
    }
    return average / notes.length;
}