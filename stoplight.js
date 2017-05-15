document.getElementById('red').onclick = illuminateRed;
document.getElementById('yellow').onclick = illuminateYellow;
document.getElementById('green').onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
  
}

function illuminateYellow() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}


function clearLights() {
  document.getElementById('red').style.backgroundColor = "black";
  document.getElementById('yellow').style.backgroundColor = "black";
  document.getElementById('green').style.backgroundColor = "black";

}
