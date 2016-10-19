// 3. Create an event listener(s) so that when you click on a light, it turns to its respective color (i.e., top light turns red).
$("#red").on("click", assignRed);
function assignRed () {
  $("#red").css({"background":"red"});
}

$("#yellow").on("click", assignYellow);
function assignYellow () {
  $("#yellow").css({"background":"yellow"});
}

$("#green").on("click", assignGreen);
function assignGreen () {
  $("#green").css({"background":"green"});
}
