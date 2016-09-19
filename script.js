

// Create an array called `colors` that contains three colors.
var colors=["red","green","blue"];

// Log the last item in the array to the console.
console.log(colors[colors.length-1]);

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for (var i=0;i<colors.length;i++) { console.log("My favorite color is",colors[i]) };
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
      firstName:"Adrian",
      lastName:"Maseda",
      photoUrl:"https://avatars.slack-edge.com/2016-09-08/77715088977_b0a4a7757893626bda06_512.jpg"
}

// Add a `facial-hair` property to `instructor`.

instructor["facial-hair"]= "full beard";

// Log the value of the `facial-hair` property to the console.
console.log(instructor["facial-hair"]);
