var redlight = $('#red')
var yellowlight = $('#yellow');
var greenlight = $('#green');

redlight.on('click',() => {redlight.toggleClass('active')});
yellowlight.on('click',() => {yellowlight.toggleClass('active')});
greenlight.on('click',() => {greenlight.toggleClass('active')});
