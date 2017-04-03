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

if($("#red").hasClass("active")) {
	$("#red").removeClass("active");
	} else {

	$("#red").addClass("active");
	$("#yellow").removeClass("active");
	$("#green").removeClass("active");

}


	});


$("#green").click(function() {

	if($("#green").hasClass("active")) {
	$("#green").removeClass("active");

	} else {
	$("#green").addClass("active");
	$("#yellow").removeClass("active");
	$("#red").removeClass("active");
	}

});


$("#yellow").click(function() {
	 
	if($("#yellow").hasClass("active")) {
	$("#yellow").removeClass("active");

	} else { 

	$("#yellow").addClass("active");
	$("#green").removeClass("active");
	$("#red").removeClass("active");

	}
});

});










