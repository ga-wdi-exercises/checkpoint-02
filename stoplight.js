var redButton = $("#red");
var yellowButton = $("#yellow");
var greenButton = $("#green");


//this way doesn't work for some reason - says cannot create property guide on string turnRed or turn Yellow
// var turnRed = function(){
// 	redButton.addClass("active");
// }

// var turnYellow = function(){
// 	redButton.removeClass("active");
// 	yellowButton.addClass("active");
// }

// redButton.on("click", "turnRed");
// yellowButton.on("click", "turnYellow");
// $("#green").on("click", "turnGreen");

redButton.on("click", function(){
	redButton.addClass("active");
	yellowButton.removeClass("active");
	greenButton.removeClass("active");
});
	
yellowButton.on("click", function(){
	redButton.removeClass("active");
	yellowButton.addClass("active");
	greenButton.removeClass("active");
});
	
greenButton.on("click", function(){
	redButton.removeClass("active");
	yellowButton.removeClass("active");
	greenButton.addClass("active");
	
});