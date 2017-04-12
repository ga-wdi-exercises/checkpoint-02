$("#stoplight").children("#red").on("click", function() {
  $(".bulb").css("background-color", "red");
  // clearLight();
})

$("#stoplight").children("#yellow").on("click", function() {
  $(".bulb").css("background-color", "yellow");
  // clearLight();
})

$("#stoplight").children("#green").on("click", function() {
  $(".bulb").css("background-color", "green");
  // clearLight();
})

// clearLight = function () {
//   (".bulb").on("click", function() {
//     $("#stoplight").css("background", "grey");
// })
// }
