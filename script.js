// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.

var colors = ["red", "yellow", "green"];
console.log(colors[2]);

//for loop

for (var i = colors.length - 1; i >= 0; i--) {
	colors[i]
	console.log("My favorite color is " + colors[i]);
}

var instructor = {
	name : "Ammar",
	age: 29,
	address : "Reston"

};

instructor.facialHair = "Beard";
console.log(instructor.facialHair);

$(".bulb .active").on("click", function() {
	this.css(blue);
})




