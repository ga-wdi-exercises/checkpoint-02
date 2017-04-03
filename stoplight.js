var redlight = $('#red')
var yellowlight = $('#yellow');
var greenlight = $('#green');

var lights = [redlight, yellowlight, greenlight];


redlight.toggleClass('active');

redlight.on('click', () => {redlight.toggleClass('active')});
yellowlight.on('click', turnYellow);
greenlight.on('click',turnGreen);

function turnGreen() {
  if(!(checkLights())) {
      greenlight.toggleClass('active');
    };
}

function turnYellow() {
  if(!(checkLights())) {
    yellowlight.toggleClass('active');
    setTimeout(yellowToRed,2000);
  }
}


function yellowToRed() {
    yellowlight.toggleClass('active');
    turnRed();
  }


function turnRed() {
  if(!(checkLights())) {
    redlight.toggleClass('active');
  }
}



function checkLights () {
  for(var i = 0 ;i < lights.length; i++) {
    if(lights[i].hasClass('active')) {
      return true;
    };
  };
}
//   lights.every(function(light){
//     if(!(light.hasClass('active'))) {
//     };
//   });
// }
