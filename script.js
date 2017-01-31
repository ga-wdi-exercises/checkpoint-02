// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.

  var colors = ["white", "blue", "red"];
  console.log(colors[2]);
  colors.forEach(function(currentColor) {
    console.log("My favorite color is " + colors );
});
var instructor = {
  name: "John Doe",
  education: "Ga",
  contact: {
    phone: "202-222-7676",
    email: "john@gmail.com",
    address: "1133 15th street NW"
  },
  "facial-hair": true,

}
console.log(instructor["facial-hair"]);
