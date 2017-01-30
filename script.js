// Create an array called `colors` that contains three colors.
var colorArray = ['red','white','blue']
// Log the last item in the array to the console.
console.log(colorArray[2])
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for(i=0; i < colorArray.length; i++) {
  console.log("My favorite color is "+colorArray[i]+".")
}
// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  name: 'James',
  age: 1000,
  computer: 'Macbook'
}
// Add a `facial-hair` property to `instructor`.
instructor['facial-hair'] = true
// Log the value of the `facial-hair` property to the console.
console.log(instructor['facial-hair'])
