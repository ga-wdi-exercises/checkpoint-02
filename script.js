// Create an array called `colors` that contains three colors.
var colors = ['red', 'green', 'blue'];
// Log the last item in the array to the console.
console.log(colors[2]);
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for(i = 0; i < colors.length; i++){
    console.log('my favorite color is ' + colors[i]);
}

// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  name: 'andy',
  'hair-color': 'black',
  tenure: 6
};
// Add a `facial-hair` property to `instructor`.
instructor['facial-hair'] = true;
// Log the value of the `facial-hair` property to the console.
console.log(instructor['facial-hair']);
