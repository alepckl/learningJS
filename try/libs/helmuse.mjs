
let elements = document.querySelectorAll("li");

for (let currentElem of elements) {
    currentElem.addEventListener('click', function () {
        let radioElement = document.getElementById('onglet-radio');
        let listeElement = document.getElementById('onglet-liste');

        // Vérifie que l'on ne clique pas sur l'onglet déjà actif.
        if (this.className === "onglet actif") return;
        // Détermine notre item sur lequel on a cliqué comme l'actif.
        this.className = "onglet actif";

        // Vérifie nos ID et agis en conséquences.
        if (this.id === "onglet-radio") {
            listeElement.className = "onglet";
            changeActiveScreen("radio");
        } else {
            radioElement.className = "onglet";
            changeActiveScreen("liste");
        }
    })
}

/**
 * Change notre écran actuel.
 * @param item
 */
function changeActiveScreen(item) {
    let screenList = document.getElementById("ecran-liste");
    let screenRadio = document.getElementById("ecran-radio");
    if (item === "radio") {
        screenRadio.className = "ecran actif";
        screenList.className = "ecran";
    } else {
        screenList.className = "ecran actif"
        screenRadio.className = "ecran";
    }
}