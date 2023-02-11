let urlBase = 'http://dartagnan.cg.helmo.be/~p150107/tutoriels';
fetch(`${urlBase}/js-ajax/examenLeaks.html`)
    .then(response => {
        if (!response.ok){
            return new Error(`[${response.status}]: ${response.statusText} `);
        }
        console.log(JSON.stringify(response));
    })
    .catch(error => {
        console.log(`Exception: ${error.message}`);
    });

let data = JSON.stringify({text: 'Matricule E1234569'});
fetch(`${urlBase}`, {method: "POST", body: data})
    .then(response => {
        if (!response.ok){
            throw new Error(`[${response.status}]: ${response.statusText} `);
        }
        return response;
    })
    .then(response => response.json())
    .catch(error => {
        console.log( `Exception: ${error.message}`);
    });

/*
* L'objet Response contient, entre autres, les propriétés et méthodes suivantes:

ok: true si statut HTTP compris entre 200 et 299, false sinon,
status: statut HTTP,
statusText: version texte associée au statut HTTP,
blob(): promesse qui retourne le contenu du corps de la réponse HTTP en un objet Blob (image, vidéo, ...),
formData(): promesse qui retourne le contenu du corps de la réponse HTTP en un objet FormData (données d'un formulaire),
json(): promesse qui retourne le contenu du corps de la réponse HTTP en un objet JS obtenu en interprétant le corps de la réponse HTTP en JSON,
text(): promesse qui retourne le contenu du corps de la réponse HTTP en texte brut.
*/

function getImage(url, size) {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size * size}`)
        .then(response => {
            if (!response.ok){
                return new Error(`[${response.status}]: ${response.statusText} `);
            }
            return response;
        })
        .then(response => response.blob())
        .then(text => URL.createObjectURL(text))
        .then((imageUrl) => {
            let image = document.createElement("img");
            image.src = imageUrl;
            document.getElementById("screen").appendChild(image);
        })
        .catch(error => { //5: traitement des exceptions
            console.log(`Exception: ${error.message}`);
        });
}