// Create an array called `colors` that contains three colors.
var colors = ["blue", "green", "red"]
// Log the last item in the array to the console.
console.log(colors[2])
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
function printColor(){
for (i=0; i<colors.length; i++){
  console.log("My favorite color is " + colors[i])
}
}
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  name: "professor x",
  power: "Psionic telepathy",
  team: "X-Men"
};
// Add a `facial-hair` property to `instructor`.
instructor.facial = "none"
// Log the value of the `facial-hair` property to the console.
console.log(instructor.facial)
