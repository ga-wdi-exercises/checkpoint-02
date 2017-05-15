// Create an array called `colors` that contains three colors.
var colors = ["green", "yellow", "red"]

// Log the last item in the array to the console.
console.log(colors[2])
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for(i = 0; i < colors.length; i++) {
  console.log("My favorite color is " + colors[i] + ".")
}
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = "beard";
// Log the value of the `facial-hair` property to the console
console.log(instructor["facial-hair"]);

$( document ).ready(function() {
  $( "#red" ).on("click", function() {
  $( this ).turnToRed;
})
function turnToRed() {
  $('#red').toggleClass(bulbRed);
}

$( "#yellow" ).on("click", function() {
$( this ).turnToYellow;
})
function turnToYellow() {
$('#yellow').toggleClass(bulbYellow);
}

$( "#green" ).on("click", function() {
$( this ).turnToGreen;
})
function turnToGreen() {
$('#green').toggleClass(bulbGreen);
}
});
