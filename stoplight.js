let redBulb = $("#red");
let yellowBulb = $("#yellow");
let greenBulb = $("#green");



greenBulb.on("click", changeGreenBulb);

function changeGreenBulb() {
  if (green.style.backgroundColor == "green") {
    greenBulb.css("background-color", "#555");
  } else {
    greenBulb.css("background-color", "green");
    yellowBulb.css("background-color", "#555");
    redBulb.css("background-color", "#555");
  }
}

yellowBulb.on("click", changeYellowBulb);

function changeYellowBulb() {
  if (yellow.style.backgroundColor == "yellow") {
    yellowBulb.css("background-color", "#555");
  } else {
  yellowBulb.css("background-color", "yellow");
  redBulb.css("background-color", "#555");
  greenBulb.css("background-color", "#555");
  }
}


redBulb.on("click", changeRedBulb);

function changeRedBulb() {
  if (red.style.backgroundColor == "red") {
    redBulb.css("background-color", "#555");
  } else {
  redBulb.css("background-color", "red");
  yellowBulb.css("background-color", "#555");
  greenBulb.css("background-color", "#555");
  }
}
