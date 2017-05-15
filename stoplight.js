var redBulb = $("#red");
var yellowBulb = $("#yellow");
var greenBulb = $("#green");

activateRed = function() {
  redBulb.toggleClass("active")
}

var redAfterYellow = function() {
  redBulb.toggleClass("active")
}

var activateYellow = function() {
  yellowBulb.toggleClass("active");
}

var yellowBehavior = function() {
  setTimeout(redAfterYellow, 2000);
  setTimeout(activateYellow, 2000)
}

var activateGreen = function() {
  greenBulb.toggleClass("active")
}

redBulb.on("click", activateRed);
yellowBulb.on("click", yellowBehavior);
yellowBulb.on("click", activateYellow);
greenBulb.on("click", activateGreen);
