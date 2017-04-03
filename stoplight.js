// var redLight = $("div#red")
//
// function lightTurnsRed () {
//   console.log ("I was clicked");
// }
//
// redLight.on("click",lightTurnsRed);


//Turn on yellow light
var yellowLight = $("div#yellow")

function lightTurnsYellow () {
  console.log ("I was clicked");
  $("div#yellow.bulb").addClass("active");
}

yellowLight.on("click",lightTurnsYellow);

//Turn on green light
var greenLight = $("div#green")

function lightTurnsGreen () {
  console.log ("I was clicked");
  $("div#green.bulb").addClass("active");
}

greenLight.on("click",lightTurnsGreen);

// Yellow to Red after two seconds
// var yellowToRed = function(){
//   $("div#yellow.bulb").addClass("active");
// }
//
// var lightTimer;
//
// start.on("click", function(){
//   lightTimer = setInterval(yellowToRed, 200);
// });
// }
