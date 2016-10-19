$(document).ready(function(){
  console.log("hi");

  $(".bulb").on("click", function(){
    $(this).removeClass(".bulb").addClass("active");
  });




});
