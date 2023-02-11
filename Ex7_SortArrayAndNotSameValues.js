let course = [
    {totem: "Raton", nom: "PAHAYT", prenom: "Luc"},
    {totem: "Epagneul", nom: "MARTIJN", prenom: "Sven"},
    {totem: "Colibri", nom: "LING", prenom: "Riu"},
    {totem: "Ours", nom: "NGOMBE", prenom: "Dieumerci"},
    {totem: "Faucon", nom: "MALTESE", prenom: "Kurt"},
    {totem: "Tarentule", nom: "ARNEM", prenom: "Marthe"}
];

let pistes = [
    {totem: "Impala", nom: "KALHDOUN", prenom: "Mohammed"},
    {totem: "Raton", nom: "PAHAYT", prenom: "Luc"},
    {totem: "Bison", nom: "VANDENHOUT", prenom: "Lauren"},
    {totem: "Epagneul", nom: "MARTIJN", prenom: "Sven"},
    {totem: "Kiwi", nom: "BENASSOUR", prenom: "Sarah"},
    {totem: "Faucon", nom: "MALTESE", prenom: "Kurt"},
];

function differencesTablesActivites(a, b){
    // On filtre sur les différences. le concat c'est fusionner le second tableau
    let tab = a
        .filter((x) => !(b.some((y) => x.totem === y.totem)))
        .concat(b.filter((x) => !(a.some((y) => x.totem === y.totem))));

    return tab.sort((eleveA, eleveB) => eleveA.totem.localeCompare(eleveB.totem));
}

console.log(array);