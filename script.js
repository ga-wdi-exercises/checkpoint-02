// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.



var color
var colors = ["red", "green", "blue"]

console.log(colors[colors.length - 1])

for (color = 0; color < colors.length; ++color) {
    console.log("My favorite color is " + colors[color]);
}

var item
var instructor = {
    foam:           "barbasol",
    blade:          "Harrys",
    friendship:     "bestship",
    facialhair:     "instructor"
}


// found this on stackoverflow, I have a good(not great) idea of what it's doing per line.
function locate(x) {
    var y = ''
    for (var item = 0; item < instructor.length; instructor++) {
        if (instructor[item].index == x) {
            y = instructor[item];
            break;
        }
                                
    }
    console.log(y);
}
