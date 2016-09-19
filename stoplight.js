//Turns top red
$("#red").on("click", function() {
  $(this).toggleClass("bulb", onOrOff());
});

function onOrOff(){
  if ($('#red.bulb').hasClass('bulb active')){
    $(this).css("background-color", "red");
  } else {
    $(this).css("background-color", "gray");
  }
};


//Turns middle yellow
$("#yellow").on("click", function() {
    $(this).css("background", "yellow");
});

//Turns bottom green
$("#green").on("click", function() {
    $(this).css("background", "green");
});
