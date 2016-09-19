var yellow = $("#stoplight #yellow");
var green = $("#stoplight #green");
var red = $("#stoplight #red");

// Yellow Light
function handleYellow() {
  yellow.css("background-color", "yellow");
}

yellow.on("click", handleYellow);

// Green Light
function handleGreen() {
  green.css("background-color", "green");
}

green.on("click", handleGreen);

// Red Light
function handleRed() {
  red.css("background-color", "red");
}

red.on("click", handleRed);


// remove light on click *could not figure this out, would like help!

// red.removeAttr("onclick");
// red.off("click");
red.prop('onclick', null);
green.removeAttr("click");
yellow.removeAttr("click");
