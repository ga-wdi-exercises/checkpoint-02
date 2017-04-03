let redBulb = $("#red");
let yellowBulb = $("#yellow");
let greenBulb = $("#green");



greenBulb.on("click", changeGreenBulb);

function changeGreenBulb() {
  greenBulb.css("background-color", "green");
  yellowBulb.css("background-color", "#555");
  redBulb.css("background-color", "#555");
}

yellowBulb.on("click", changeYellowBulb);

function changeYellowBulb() {
  yellowBulb.css("background-color", "yellow");
  redBulb.css("background-color", "#555");
  greenBulb.css("background-color", "#555");
}


redBulb.on("click", changeRedBulb);

function changeRedBulb() {
  redBulb.css("background-color", "red");
  yellowBulb.css("background-color", "#555");
  greenBulb.css("background-color", "#555");
}
