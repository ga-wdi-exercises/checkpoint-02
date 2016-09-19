var redBulb = $("#red");
var yellowBulb = $("#yellow");
var greenBulb = $("#green");

activateRed = function() {
  redBulb.toggleClass("active")
}

activateYellow = function() {
  yellowBulb.toggleClass("active")
}

activateGreen = function() {
  greenBulb.toggleClass("active")
}


redBulb.on("click", activateRed)
yellowBulb.on("click", activateYellow)
greenBulb.on("click", activateGreen)
