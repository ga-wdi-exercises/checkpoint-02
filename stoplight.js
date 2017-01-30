$(document).ready(function(){

var red = $("#red")
var green = $("#green")
var yellow = $("#yellow")
var stoplight = $("#stoplight")

  red.on("click", function(){
    $("#red").css("background-color", "red");


        // red.stop("click", function(){
        //   $("#red").hide("html")
        // })

   })

   green.on("click", function(){
      $("#green").css("background-color", "green");

       stoplight.off("click", function(){
         $("#green").off("#stoplight")
       })
    })

    yellow.on("click", function(){
    $("#yellow").css("background-color", "yellow");
     })

    red.off("click", function(){
      $("#red").alert("you turned me off!")
    })


// $("#stoplight" > "#red").on("Click", function(){
//    $(".bulb active").css("background-color", "yellow");




})
