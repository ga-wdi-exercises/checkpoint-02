// 3. Create an event listener(s) so that when you click on a light, it turns to its respective color (i.e., top light turns red).
$("#red").on("click", assignRed);
function assignRed () {
  $("#red").css({"background":"red"});
    $("#red").on("click", assignBlack);
      function assignBlack () {
      $("#red").css({"background":"#555"});
      }
}

$("#yellow").on("click", assignYellow);
  function assignYellow () {
    $("#yellow").css({"background":"yellow"});
      $("#yellow").on("click", assignBlack);
        function assignBlack () {
        $("#yellow").css({"background":"#555"});
    }
}

$("#green").on("click", assignGreen);
  function assignGreen () {
    $("#green").css({"background":"green"});
      $("#green").on("click", assignBlack);
        function assignBlack () {
        $("#green").css({"background":"#555"});
    }
}
