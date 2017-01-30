// Create an array called `colors` that contains three colors.

// Log the last item in the array to the console.

// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.

// Create an `instructor` object that contains three key-value pairs.

// Add a `facial-hair` property to `instructor`.

// Log the value of the `facial-hair` property to the console.

var colors = ["purple", "black", "brown"];

var thirdColor = colors[3];
console.log(colors[3]);

for(i=0; i<colors.length; i++){
  console.log("my favorite color is" + colors[i]);
}

var instructor ={
     firstName: "Adrian",
     Age:"34",
     Gender: "male",
};

instructor["facial-hair"] = "black";

console.log(instructor[4]);

$(document).ready(function(){

});

$("#red").click(function(){
    $(this).css("background-color", "red");
  });
  $("#yellow").click(function(){
      $(this).css('background-color', 'yellow');
    });
    $("#green").click(function(){
        $(this).css('background-color', 'green');
      });
