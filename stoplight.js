//Readme instructions for Jquery.

var red = $("#red.bulb")
var yellow = $("#yellow.bulb")
var green = $("#green.bulb")

function changeLightRed(){
	$("#stopLight").css("background", "red");
}

function changeLightYellow(){
	$("#stopLight").css("background", "yellow");
}

function changeLightGreen(){
	$("#stopLight").css("background", "green");
}

red.on("click", changeLightRed);
yellow.on("click", changeLightYellow);
green.on("click", changeLightGreen);


