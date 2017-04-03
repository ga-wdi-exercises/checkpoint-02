var redlight = $('#red')
var yellowlight = $('#yellow');
var greenlight = $('#green');

turnRed();

redlight.on('click', () => {redlight.toggleClass('active')});
yellowlight.on('click', turnYellow);
greenlight.on('click',turnGreen);

function turnGreen() {
  greenlight.toggleClass('active');
}

function turnYellow() {
  yellowlight.toggleClass('active');
  setTimeout(yellowToRed,2000);
}


function yellowToRed() {
  yellowlight.toggleClass('active');
  turnRed();
}

function turnRed() {
  redlight.toggleClass('active');
}
