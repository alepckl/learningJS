let month = 0;
let year = 2015;
let loadedImage = 0;

function chooseMonth() {
    if (month < 12) {
        month++;
    } else {
        month = 1;
        year++;
    }
}

function parseImageIntoHtml() {
    // Met à jour la date dans une variable locale.
    chooseMonth();

    // Requête pour la date courante.
    let request = recoverPlanetPhoto();
}

function recoverPlanetPhoto() {
    let currentUrl = `https://epic.gsfc.nasa.gov/api/enhanced/date/${year}-${"0" +month}-01`;
    console.log("URL courant: " + currentUrl);

    return fetch(currentUrl)
        .then(response => {
            if (!response.ok) {
                return new Error(response.status + " -- " + response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(response => {
            if (response.length == 0 || !response) {
                parseImageIntoHtml()
                return new Error(`Image cannot be loaded for the date: ${year}-${month}-1`);
            }

            // Met à jour l'aperçu
            let number = document.getElementById("nbrP");
            number.value = ++loadedImage;

            // Mise en place de l'image.
            let toLoad = document.getElementById(`nasa${loadedImage}`);
            toLoad.src = `https://epic.gsfc.nasa.gov/archive/enhanced/${year}/${"0"+ month}/01/png/${response[0].image}.png`;
        })
        .catch(error => {
            return `[Ajax] recoverPlanetPhoto : ` + error;
        });

}



let timer = 9;
for (let i=0; i < timer; i++) {
    // Load une image à un emplacement demandé
    parseImageIntoHtml();
}