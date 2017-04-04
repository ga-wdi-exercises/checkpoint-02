document.getElementById('red').onclick = illuminateRed;
document.getElementById('yellow').onclick = illuminateYellow;
document.getElementById('green').onclick = illuminateGreen;


function illuminateRed() {
  document.getElementById('red').style.backgroundColor = "red";
}
function illuminateYellow() {
  document.getElementById('yellow').style.backgroundColor = "yellow";
}
function illuminateGreen() {
  document.getElementById('green').style.backgroundColor = "green";
}
