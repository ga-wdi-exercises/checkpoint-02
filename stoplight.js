console.log("stoplight.js Loaded");
var redLight = $("#red");
var yellowLight = $("#yellow");
var greenLight = $("#green");

redLight.on("click", turnRedOn);
yellowLight.on("click", turnYellowOn);
greenLight.on("click",turnGreenOn);

function turnGreenOn() {
  console.log("GREEN LIGHT!");
  
}
function turnRedOn (){
  console.log("RED LIGHT!");
}
function turnYellowOn (){
  console.log("YELLOW LIGHT!");
}
