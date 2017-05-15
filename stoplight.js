document.getElementById('red').onclick = illuminateRed;
document.getElementById('yellow').onclick = illuminateYellow;
document.getElementById('green').onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  var red = document.getElementById('red');
  red.bulb.style.background-color = "red";
}

function illuminateYellow() {
  clearLights();
  var yellow = document.getElementById('yellow');
  yellow.bulb.style.background-color = "yellow";
}

function illuminateGreen() {
  clearLights();
 var green = document.getElementById('green');
    green.bulb.style.background-color = "green";
}


function clearLights() {
  document.getElementById('red').style.backgroundColor = "black";
  document.getElementById('yellow').style.backgroundColor = "black";
  document.getElementById('green').style.backgroundColor = "black";

}
