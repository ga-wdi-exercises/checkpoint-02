// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.

let colors = ["red", "yellow", "green"];
console.log(colors[2]);

for(let i = 0; i < colors.length; i++) {
  console.log("My favorite color is " + colors[i]);
}

let instructor = {
  name: "Ick" ,
  age: "26" ,
  gender: "male" ,
};

instructor["facial-hair"] = "unknown";
console.log(instructor["facial-hair"]);
