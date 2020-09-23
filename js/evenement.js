//var test = $("ul")[0].firstChild;
var li = $("li")[2];
var nouvelle = "<li>node4</li>";

$(li).append(nouvelle);
// ------- EVENEMENT CLICK

// on selectionne la div1 dans le DOM que l'on stock dans une variable
var div1 = $("#div1");

// on associe l'évènement 'click' à la div1 que nous venons de selectionner, et pour chaque clic, la fonction anonyme déclarée s'execute automatiquement

//----------------------------------------------------------------------
// On selectionne la div1 et dans le même temps on associe l'évènement 'click' et la fonction anonyme s'execute automatiquement
div1.click(function () {
  //alert('Div1 (test2) - évènement CLICK');
  $(this).css("backgroundColor", "purple");
});

//----------------------------------------------------------------------
// addEventListener() fonction prédéfinie qui fait partie de l'objet selectionné (div1) et qui permet d'associer un évènement
// addEventListener() : 1er argument : l'évènement | 2ème arguement : le code à executer à l'évènement


//----------------------------------------------------------------------


//---------- EVENEMENT DBLCLICK
// Exo : selectionner la div id 'div2', associer l'évènement double click et afficher une alerte en cas de double clic sur la div
$("#div2").dblclick(function () {
  $(this).css("boxShadow", "13px 17px 23px -1px rgba(0,0,0,0.75)");
  $(this).css("letterSpacing", "15px");
  $(this).css("borderRadius", "15px");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "all 2s");
});

// document.getElementById('div1').addEventListener('dblclick', function()    {
//     this.style.fontSize = "xx-large";
//     this.style.border = "thick solid #0000FF";
//     this.style.fontWeight = "900";
//     this.innerHTML = 'Vivement le week-end !!';
// }

//----------- EVENEMENT MOUSEOVER
$("#div3").mouseover(function () {
  $(this).css("boxShadow", "13px 17px 23px -1px rgba(0,0,0,0.75)");
  $(this).css("letterSpacing", "15px");
  $(this).css("borderRadius", "15px");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "all 2s");
  $(this).css("color", "#000000"); // this dans ce cas représente l'objet 'div3' que nous avons selectionné dans le DOM
});
//----------- EVENEMENT MOUSEOUT
$("#div3").mouseout(function () {
  $(this).css("boxShadow", "none");
  $(this).css("letterSpacing", "0");
  $(this).css("borderRadius", "0");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "all 2s");
  $(this).css("color", "#ffffff");
});

//----------- EVENEMENT MOUSEOUT
$("#div4").mouseout(function () {
  $(this).css("width", "200px");
  $(this).css("transition", "all 1s");
  $(this).css("boxShadow", "13px 17px 23px -1px rgba(0,0,0,0.75)");
  $(this).css("transform", "rotate(7deg)");
  $(this).css("letterSpacing", "0px");
  // this.style.transform = "scale(1.5)";
  $(this).css("borderRadius", "15px");
  $(this).css("position", "relative");
});

$("#div4").mouseover(function () {
  $(this).css("width", "300px");
  $(this).css("transition", "all 1s");
  $(this).css("boxShadow", "none");
  $(this).css("transform", "rotate(0deg)");
  $(this).css("letterSpacing", "15px");
  $(this).css("transform", "0");
  $(this).css("borderRadius", "0");
  $(this).css("position", "relative");
});

//----------- EVENEMENT MOUSEDOWN
$("#div5").mousedown(function () {
  alert("Evènement div5 MOUSEDOWN");
});

//----------- EVENEMENT KEYDOWN
// KEYDOWN se déclenche lorsque l'on presse un touche du clavier dans le champ input
$("#form1").keydown(function () {
  alert("Evènement KEYDOWN form1 !!");
});

//---------- EVENEMENT SELECT
// SELECT se déclenche lorsque l'on selectionne le contenu d'un input
$("#form2").select(function () {
  alert("Evènement SELECT form2 !!");
});

//---------- EVENEMENT SUBMIT
// event : représente l'évènement 'submit'
$("#form3").submit(function (event) {
  event.preventDefault(); // preventDefault() est une fonction prédéfinie qui permet d'annuler le comportement du bouton 'submit' qui a pour rôle de recharger le code / la page
  alert("Evènement SUBMIT form3 !!");
});
