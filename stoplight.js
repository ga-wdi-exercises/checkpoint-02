
function turnGreen (){
  clearLights ();
  green.css("background-color", "green")
}
function turnRed (){
  clearLights ();
  red.css("background-color", "red")
}
function turnYellow (){
  clearLights ();
  yellow.css("background-color", "yellow")
}

green = $('#green');
red = $('#red');
yellow = $('#yellow');


green.on('click',turnGreen);
red.on('click', turnRed);
yellow.on('click', turnYellow);

function clearLights (){
  $('#green').css("background-color", "black")
  $('#red').css("background-color", "black")
  $('#yellow').css("background-color", "black")
}
