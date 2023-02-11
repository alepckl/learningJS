const URL = "http://dartagnan.cg.helmo.be/~p150107/tutoriels/js-ajax/exercices/three-rule.php"

let items = []
let nbPersonnesPrevues = 0;
let nbConvives = 0;

document.getElementById('butt_calc').addEventListener ('click', () => {

    let doc = document.querySelector('.ingredient');
    nbConvives = document.getElementById('nbrConvives').value;
    nbPersonnesPrevues = document.getElementById('nbrPersonnes').value;
    //console.log(document.getElementById('ingredients').childElementCount);
    for (let ingredientActuel of document.getElementById('ingredients').childNodes.values()) {
        if(ingredientActuel.hasChildNodes()) {
            console.log("taille : " +ingredientActuel.childElementCount);
            for (let i = 1; i <= ingredientActuel.childElementCount / 3; i++) {
                let name = document.getElementById(`ingredient-${i}`).value
                let quantite = document.getElementById(`quantite-${i}`).value
                let unite = document.getElementById(`unite-${i}`).value

                // Ajoute dans la liste des items.
                items.push({ingredient: name, quantite: quantite, unite: unite});
            }
        }
    }

    console.log(`Liste des ingrédients : ${items}`);
    console.log(items);
    console.log(`Nombre de convives : ${nbConvives}`);
    console.log(`Nombre de personnes prévues : ${nbPersonnesPrevues}`);
    let ingredients = JSON.stringify({ nbrPersonnes: nbPersonnesPrevues, nbrConvives: nbConvives, ingredients: items });

    let promise = fetch(URL, {method: "POST", body: ingredients})
        .then(response => {
            if (!response.ok) {
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            console.log("OK EN SAH");
            return response;
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error.message);
        })

    console.log(promise.then(
        value => console.log(value)))
})
