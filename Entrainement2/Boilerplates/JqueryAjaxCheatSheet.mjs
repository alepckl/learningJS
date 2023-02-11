//remplace le contenu de <main> par le contenu
//de .pizza du site www.pizzeria.be
$("main").load("www.pizzeria.be .pizza");

//remplace le contenu de <main> par le contenu
//du <body> du site www.pizzeria.be?nom=calzone
$("main").load("www.pizzeria.be", "nom=calzone");

$("main").load("html/formContact.html", function () {
    //fonction callback qui est appelée APRES que
    //le contenu de <body> de formContact.html
    //soit placé dans <main>
});


//remplace le contenu de <main> par
//le contenu du <body> du site www.pizzeria.be en passant le paramètre nom="calzone"
$("main").load("www.pizzeria.be", {nom: "calzone"});

//chargement du fichier jquery_my_plugin.js
$.getScript("js/jquery.my_plugin.js", function (responseText, textStatus, jqXHR) {
    if (textStatus == "error") {
        //gestion d'erreur
    } else {
        //fonction callback qui utilise une fonction obtenue par jquery_my_plugin.js
        $('#my-div').html(my_plugin());
    }
});

//idem avec une promesse
$.getScript("js/jquery.my_plugin.js").then(() => {
    $('#my-div').html(my_plugin());
}).catch(e)
{
    //gestion d'erreur
}
;

//chargement du fichier data.json qui contient le texte '{"x":1,"y":2}'
$.getJSON("data.json", function (data) {
    // alors data est l'objet {x:1, y:2}
});

$("main").load("www.pizzeria.be", "nom=calzone");
// est équivalent à :

$.ajax("www.pizzeria.be", {
    data: {nom: calzone},
    dataType: "html",
    method: "GET",
    success: function (data, textStatus, jqXHR) {
        $("main").html(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
});


$.ajax ("www.pizzeria.be", {
    data: {nom: calzone},
    dataType: "html",
    method: "GET"
}).then(data => {
    $("main").html(data);
})
    .catch((jqXHR, textStatus, errorThrown) => {
    });

$.ajax("fichier_inexistant.txt")
    .then(function(data) {
        console.log("fichier chargé...");
    })
    .catch(function(xhr, status, error) {
        console.log("fichier non trouvé...");
    });

$.ajax("fichier_inexistant.txt")
    .done(function(data) {
        console.log("fichier chargé...");
    })
    .fail(function(xhr, status, error) {
        console.log("fichier non trouvé...");
    })
    .always(function() {
        console.log("fin de la tentative de chargement");
    });

$.get("data/liste_profs.txt")
    .then(function(profs){
        return $.get("data/liste_etudiants.txt");
    })
    .then(function(etudiants){
        console.log("Listes des professeurs et des étudiants chargées...");
    })
    .catch(function(jqXHR, textStatus, error) {
        console.log("Au moins une des deux listes n'a pu être chargée...");
    });

$("#formContact button[name='bttSend']").click(function(event){
    event.preventDefault();
    $.ajax("src/sendMessage.php", {
        data: $("#formContact").serialize(),
        dataType: "html",
        method: "POST",
        success: function(data){
            $("form + p").remove();
            $("form").after(data);
        }
    });
});

$("#formContact button[name='buttSend']").click(function(){
    let formData = new FormData(document.getElementById('formContact'));
    formData.append("lang", "fr");
    $.ajax("src/sendMessage.php", {
        processData: false,
        contentType: false,
        data: formData,
        dataType: "html",
        method: "POST",
        success: function(confirmation) {
            $("form + p").remove();
            $("form").after(confirmation);
        }
    });
});


