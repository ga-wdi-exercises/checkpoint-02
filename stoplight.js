// console.log("stoplight says hello");
$(document).ready(function(){
  $("#red").on("click", function(){
    $(this).toggleClass("active");
  })
  $("#yellow").on("click", function(){
    $(this).toggleClass("active");
  })
  $("#green").on("click", function(){
    $(this).toggleClass("active");
  })

  })
