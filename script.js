// Create an array called `colors` that contains three colors.
let colors = ['green','yellow','red']
// Log the last item in the array to the console.
console.log(colors[2])
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for (let i = 0; i < colors.length; i++) {
	console.log(`My Favorite color is ${colors[i]}`)
}
// Create an `instructor` object that contains three key-value pairs.
let instructor = {
	name : "The Teach",
	height : 66,
	skillSet: "Functional Programing"
}
// Add a `facial-hair` property to `instructor`.
instructor['facial-hair'] = "Blue Chin Strap"
// Log the value of the `facial-hair` property to the console.
console.log(instructor['facial-hair'])