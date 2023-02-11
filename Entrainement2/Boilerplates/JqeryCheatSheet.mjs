//<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//<script type="text/javascript" src=" http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js "></script>

//ajoute une ligne horizontale après le premier paragraphe
$('p:first').after("<hr>");

//masque le premier paragraphe lorsque l'utilisateur clique dessus
$('p:first').click(
    function(){ $(this).hide(); }
);

$('p:first').on("click",
    function(){ $(this).hide(); }
);

//place la valeur 10 dans le champ de formulaire identifié par 'nbr'
$('#nbr').val(10);

//place la chaine 'Coucou' dans tous les éléments de classe CSS 'texte'
$('.texte').html('Coucou');

//place la valeur 'Vincent' dans les champs de formulaire dont le nom est 'prenom'
$('[name="prenom"]').val("Vincent");


$("p")                 //tous les <p>
$("#id")               //un élément dont l'identifiant est id
$(".classe")           //tous les éléments de classe "classe"
$("ul li:first")       //le premier <li> du premier <ul>
$("ul li:first-child") //le premier <li> de tous les <ul>
$("tr:odd")            //les lignes impaires


$("#demo").html("Hello World!");
$("h1:first").css( "color", "red" );
$("#temp").remove();

$("p").on("click", function(){
    alert("The paragraph was clicked.");
});


$("button").on("click", function(){
    $("p").off("click");
});


$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
});


personObj = new Object();
personObj.firstname = "John";
personObj.lastname = "Doe";
personObj.age = 50;
personObj.eyecolor = "blue";
$("button").click(function(){
    $("div").text($.param(personObj));
    //firstname=John&lastname=Doe&age=50&eyecolor=blue
});