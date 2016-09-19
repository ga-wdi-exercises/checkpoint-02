$("#red").on("click", changeToRed);
$("#yellow").on("click", changeToYellow);
$("#green").on("click", changeToGreen);


function changeToRed(){
  $("#red").css("background", ".active#red");
}

function changeToYellow(){
  $("#yellow").css("background", ".active#yellow");
}

function changeToGreen(){
  $("#green").css("background", ".active#green");
}
