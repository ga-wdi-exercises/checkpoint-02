// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.

$(document).ready(function(){
  console.log("hello");

var colors = ['red','yellow', 'green'];
  console.log(colors[2]);

  $(".bulb").on("click", function(evt){
    evt.preventDefault();
    console.log("click me");
    var colors = $(".bulb").colors[];
  })
//
//       for(i=0, i<0, i++){
//           console.log("hello");
//           colors[i]= ("my favorite color is" + [i]);
//       }
//   }
//
var instructor = {
  name: "Andy",
  lecture: "good",
  age: "mystery"
};
instructor.facialHair = "some";
console.log(instructor.facialHair);

});
