var redButton = $("#red")
var yellowButton = $("#yellow")
var greenButton = $("#green")

// function turnOnRed (){
//   $("#red").css("background-color", "red");
//   console.log("I was clicked")
// }
// function turnOnYellow (){
//   $("#yellow").css("background-color", "yellow");
//   console.log("I was clicked")
// }
// function turnOnGreen (){
//   $("#green").css("background-color", "green");
//   console.log("I was clicked")
// }
//
// redButton.on("click", turnOnRed)
// yellowButton.on("click", turnOnYellow)
// greenButton.on("click", turnOnGreen)
// this was the first iteration but toggleClass is way more useful here:

function toggleRed (){
  $("#red").toggleClass("active");
}
function toggleYellow (){
  $("#yellow").toggleClass("active");
}
function toggleGreen (){
  $("#green").toggleClass("active");
}

redButton.on("click", toggleRed)
yellowButton.on("click", toggleYellow)
greenButton.on("click", toggleGreen)
