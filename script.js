// Create an array called `colors` that contains three colors.
var colors = ["purple","green","navy"];
// Log the last item in the array to the console.
console.log(colors[2]);
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
colors.forEach(function(color){
  console.log("My favorite color is " + color);
});
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  height: "tall",
  tired: "yes",
  mood: "happy"
}
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = "beard";
// Log the value of the `facial-hair` property to the console.
console.log(instructor["facial-hair"]);
