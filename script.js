$(document).ready(function(){

// Create an array called `colors` that contains three colors.



var colors = ['red', 'green', 'yellow'];
var instructor = {
	name: "Whitney",
	expertise: "CSS",
	location: "Washington, D.C.",
};

// Log the last item in the array to the console.

console.log(colors[2]);

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

for (var i = 0; i < colors.length; i++) {
	console.log("My favorite color is [i]");
};



// Create an `instructor` object that contains three key-value pairs.


// Add a `facial-hair` property to `instructor`.

instructor.facialhair = "none";

// Log the value of the `facial-hair` property to the console.


$("#red").click(function() {
	$("#red").addClass("active");
	$("#yellow").removeClass("active");
	$("#green").removeClass("active");
	});



$("#green").click(function() {
	$("#green").addClass("active");
	$("#yellow").removeClass("active");
	$("#red").removeClass("active");
	});


$("#yellow").click(function() {
	$("#yellow").addClass("active");
	$("#green").removeClass("active");
	$("#red").removeClass("active");
	});



});









/*1. Create an event listener(s) so that when you click on a light, it turns to its respective color (i.e., top light turns red). Examine `style.css` first and examine how the red light is being styled. 

1. If you click a light that is already on, it turns off.

1. If you click yellow, it switches to red after two seconds.

1. Make it so that only one light can be turned on at a time (e.g., both red and yellow cannot be on at the same time). */