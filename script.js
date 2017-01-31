// Create an array called `colors` that contains three colors.
var colors = ["yellow", "navy", "deeppink"];

// Log the last item in the array to the console.
console.log(colors[2]);

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for (i=0; i<colors.length; i++){
  console.log("My favorite color is " + colors[i] + " for each item in 'colors'");
};

// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  gender: "male",
  age: "75",
  likesPrunes: "yes"
};
  console.log(instructor);
  
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = "beard";
console.log(instructor);

// Log the value of the `facial-hair` property to the console.
console.log(instructor["facial-hair"]);
