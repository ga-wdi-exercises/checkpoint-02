document.getElementById('redButton').addEventListener("click", turnItRed);
document.getElementById('yellowButton').addEventListener("click", turnItYellow);
document.getElementById('greenButton').addEventListener("click", turnItGreen);


function turnItRed() {
  document.getElementById(.active.red).style.backgroundColor = "red";
  document.getElementById(active.yellow).style.backgroundColor = "black";
  document.getElementById(active.green).style.backgroundColor = "black";
}

function turnItYellow() {
  clearLights();
  document.getElementById(.active.red).style.backgroundColor = "black";
  document.getElementById(active.yellow).style.backgroundColor = "yellow";
  document.getElementById(active.green).style.backgroundColor = "black";
  moment.duration(500)
}

function turnItGreen() {
  document.getElementById(.active.red).style.backgroundColor = "red";
  document.getElementById(active.yellow).style.backgroundColor = "black";
  document.getElementById(active.green).style.backgroundColor = "green";
}
