// console.log("stoplight says hello");
$(document).ready(function(){
  $("#red").on("click", function(){
    $("#red").css("background-color", "red")
  })
  $("#yellow").on("click", function(){
    $("#yellow").css("background-color", "yellow")
  })
  $("#green").on("click", function(){
    $("#green").css("background-color", "green")
  })
})
