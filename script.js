var colors = ['green', 'yellow', 'red'];

// Log the last item in the array to the console.

   console.log(colors[2]);

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for(i = 0; i < colors.length; i++){
  var text = "";
  text += "My favoriate color is" + " " + colors[i];
}
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
name: "Andy",
program: "WDI",
gender:"male"
};

// Add a `facial-hair` property to `instructor`.
instructor.appearance = "facial-hair"
// Log the value of the `facial-hair` property to the console.
console.log(instructor.appearance);
