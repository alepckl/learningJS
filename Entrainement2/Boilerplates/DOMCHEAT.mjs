document.getElementById('texte').innerHTML = 'Ce texte remplace le texte initial';
// Propriétés de document
document.forms; document.images; document.links; document.lastModified; document.location; document.referrer; document.write();

document.getElementById("id");
document.getElementsByTagName("nom"); //retourne un itérable HTMLCollection
document.getElementsByClassName("nom"); //retourne un itérable HTMLCollection
unNoeud.getAttribute("nom");
document.querySelector("sélecteur CSS");
document.querySelectorAll("sélecteur CSS"); //retourne un itérable NodeList
document.createTextNode("texte");
document.createElement("tag", contenu);

unNoeudParent.appendChild(autreNoeud);
unNoeud.insertBefore(autreNoeud, noeudParent);
unNoeud.insertAdjacentHTML(position, "code HTML");
unNoeudParent.replaceChild(noeudEnfant, nouveauNoeud);
unNoeudParent.removeChild(noeudEnfant);
unNoeud.remove();

unNoeud.innerHTML = `<p>Bonjour <mark>${nom}</mark>, bienvenue dans ce tutoriel</p>`;

// CSS
unElement.style.display = "none"; //masquer l'élément
unElement.classList.add("nomClasse");

//Event
document.getElementById("button1").addEventListener("click",function(event){
    alert("trouvé!");
});
document.getElementById("button1").removeEventListener("click", consoleLog);
/*
* Si la fonction appelée par le gestionnaire est définie par le motclef function,
* l'élément à l'origine de l'événement est accessible par this.
*/

item.addEventListener('click', function(event) {
    document.getElementById("fruit-fct").innerHTML = this.innerHTML;
    document.getElementById("id-fruit-fct").innerHTML =`identifiant du fruit (fct): ${event.target.id}`;
});

//$('#cors').load("https://dartagnan.cg.helmo.be/~p150107/tutoriels/js-dom/exemples/data.php", 'xml');
$.ajax("https://dartagnan.cg.helmo.be/~p150107/tutoriels/js-dom/exemples/data.php", {
    data: {},
    dataType: "html",
    method: "PUT",
    success: function(data, textStatus, jqXHR){
        $("#cors").html(data);
    },
    error: function(jqXHR, textStatus, errorThrown){
    }
});


document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function(event) {

    });
});



