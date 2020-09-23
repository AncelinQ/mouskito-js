//var test = $("ul")[0].firstChild;
var li = $("li")[2];
var nouvelle = "<li>node4</li>";

$(li).append(nouvelle);

// ------- EVENEMENT CLICK

var div1 = $("#div1");


div1.click(function () {
  $(this).css("backgroundColor", "purple");
});

//---------- EVENEMENT DBLCLICK

$("#div2").dblclick(function () {
  $(this).css("boxShadow", "13px 17px 23px -1px rgba(0,0,0,0.75)");
  $(this).css("letterSpacing", "15px");
  $(this).css("borderRadius", "15px");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "all 2s");
});

//----------- EVENEMENT MOUSEOVER
$("#div3").mouseover(function () {
  $(this).css("boxShadow", "13px 17px 23px -1px rgba(0,0,0,0.75)");
  $(this).css("letterSpacing", "15px");
  $(this).css("borderRadius", "15px");
  $(this).css("cursor", "pointer");
  $(this).css("transition", "all 2s");
  $(this).css("color", "#000000"); 
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

//----------- EVENEMENT MOUSEOVER

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
$("#form1").keydown(function () {
  alert("Evènement KEYDOWN form1 !!");
});

//---------- EVENEMENT SELECT
$("#form2").select(function () {
  alert("Evènement SELECT form2 !!");
});

//---------- EVENEMENT SUBMIT
$("#form3").submit(function (event) {
  event.preventDefault(); 
  alert("Evènement SUBMIT form3 !!");
});