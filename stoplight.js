$(document).ready(function(){
  console.log("hi");

  $(".bulb").on("click", function(){
      $(this).addClass("active");
    });

  $(".active").on("click", function(){
      $(".bulb").removeClass("active");
    });






});
