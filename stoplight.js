//So, I'm pretty sure that we were supposed to use the predefined selectors in the style.css but, I couldn't for the life of me figure out how to use those to add the classes. So, I just used the color schemes that were predefined within those rules. I definitely want to go over how to select the combined class/id tags.

$(document).ready(function() {

  // function showRed() {
  //   $("#red").addClass("active#red");
  //   $("#yellow").removeClass("active#yellow");
  //   $("#green").removeClass("active#green");
  // }
  //
  // function showYellow() {
  //   $("#red").removeClass("active#red");
  //   $("#yellow").addClass("active#yellow");
  //   $("#green").removeClass("active#green");
  // }
  //
  // function showGreen() {
  //   $("#red").removeClass("active#red");
  //   $("#yellow").removeClass("active#yellow");
  //   $("#green").addClass("active#green");
  // }
    function showRed() {
      $("#red").css("background-color","red")
      $("#yellow").css("background-color","#555")
      $("#green").css("background-color","#555")
    }

    function showYellow() {
      $("#red").css("background-color","#555")
      $("#yellow").css("background-color","yellow")
      $("#green").css("background-color","#555")
    }

    function showGreen() {
      $("#red").css("background-color","#555")
      $("#yellow").css("background-color","#555")
      $("#green").css("background-color","green")
    }


$("#red").on("click", showRed);
$("#yellow").on("click", showYellow);
$("#green").on("click", showGreen);

})
