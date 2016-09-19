// Create an array called `colors` that contains three colors.
var colorArray = ['blue', 'green', 'yellow'];

// Log the last item in the array to the console.
colorArray[2]

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
var colorArray = ['blue', 'green', 'yellow'];

var arrayLength = colorArray.length;
function myFavoriteColor () {
  for (i = 0; i< arrayLength; i++) {
    console.log("My favorite color is " + colorArray[i])
  }
}
myFavoriteColor()

// Create an `instructor` object that contains three key-value pairs.
var instructor = {
  name: "Raymond Reddington",
  years: 5,
  skils: ["JS", "HTML", "CSS"]
}
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"]=true
// Log the value of the `facial-hair` property to the console.
instructor["facial-hair"]
