$( document ).ready(function() {

  // Create an array called `colors` that contains three colors.
  let colors = ['red', 'blue', 'salmon'];
  // Log the last item in the array to the console.
  console.log(colors[2]);
  // Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
  colors.forEach((color) => {
    console.log(`My favorite color is ${color}`);
  })
  // Create an `instructor` object that contains three key-value pairs.
  let instructor = {
    firstName: 'Vick',
    lastName: 'Vinegar',
    age: 34
  };
  // Add a `facial-hair` property to `instructor`.
  instructor['facial-hair'] = 'None'
  // Log the value of the `facial-hair` property to the console.
  console.log(instructor['facial-hair']);
  
});
