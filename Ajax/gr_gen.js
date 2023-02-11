//Pensez à transformer l'url entrée par l'utilisateur avec la fonction "encodeURI()". Utilisez la fonction
//URL.createObjectURL() pour obtenir une url d'objet sur base des données reçues dans la réponse HTTP.
//En cas de succès, insérez une image dans le div #screen; sinon affichez un message d'erreur.


/**let button = document.querySelector("#butt_gen");
let url = document.querySelector("#url");
let size = document.getElementById('psize');
let div = document.querySelector("#screen");


button.addEventListener('click', () => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url.value}&size=${size.value}x${size.value}`)
        .then(response => {
            if (!response.ok){
                return new Error();
            }
            return response
        })
        // Récupère tout le contenu du corps.
        .then(response=> response.blob())
        .then(response => {
            div.innerHTML = '';
            let img = document.createElement("img")
            div.appendChild(img)
            img.src = URL.createObjectURL(response);
        })
        .catch(error => {
            console.log(`Exception: ${error.message}`);
        })
})**/

// Modifications qui seront apportées
let toInsert = document.querySelector("#screen");
let button = document.getElementById("butt_gen");

// Assignation de l'évènement.
button.addEventListener("click", function() {

    // Informations entrées
    let url = document.getElementById("url").value;
    let size = document.getElementById("psize");

    let ajax = recoverImage(url, size)
    ajax.then(source => {
        // Nettoyer l'image.
        toInsert.innerHTML = "";

        let text = document.createElement("a");
        text.text = `QRCode généré pour le site: ${url}`;
        toInsert.appendChild(text);

        let image = document.createElement("img");
        image.src = source;
        toInsert.appendChild(image)
    })
})

function recoverImage(url, size) {
    // Création de la requête Ajax
    const request = `https://api.qrserver.com/v1/create-qr-code/?data=[${url}]&size=[${size}]x[${size}]`

    return fetch(request)
        .then(response => {
            if (!response.ok) {
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            return response;
        })
        .then(response => response.blob())
        .then(response => {
            return URL.createObjectURL(response);
        })
        .catch(error => {
            return "[Ajax] recover QRCode: " + error;
        });
}