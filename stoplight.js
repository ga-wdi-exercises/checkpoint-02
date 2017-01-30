// setting up the global vars
red = $('#red');
yellow = $('#yellow');
green = $('#green');

// creating the event listeners
red.on('click', turnRed);
yellow.on('click', turnYellow);
green.on('click', turnGreen);


// functions for the event listeners
function turnRed() {
  clear();
  red.css('background-color', 'red');
  red.on('click', clear); //turning red off after 2nd click
}
function turnYellow() {
  clear();
  yellow.css('background-color', 'yellow');
  setTimeout(function() {turnRed();}, 2000);
  // created a funcion to turn yellow red after 2 seconds
}
function turnGreen() {
  clear();
  green.css('background-color', 'green');
  green.on('click', clear);//turning green off after 2nd click
}
function clear() {
  red.css('background-color', 'rgb(85,85,85)');
  yellow.css('background-color', 'rgb(85,85,85)');
  green.css('background-color', 'rgb(85,85,85)');
}
// function redOff() {
//   red.css('background-color', 'rgb(85,85,85)');
// }
// function yellowOff() {
//   yellow.css('background-color', 'rgb(85,85,85)');
// }
// function greenOff() {
//   green.css('background-color', 'rgb(85,85,85)');
// }
