$(document).ready (function() {

  $("#red").on("click", function (){
    if ( $("#red").hasClass("active")) {
    $("#red").removeClass("active");
  } else {
    $("#red").addClass("active");
  }
  });

  $("#yellow").on("click", function (){
    if ( $("#yellow").hasClass("active")) {
    $("#yellow").removeClass("active");
  } else {
    $("#yellow").addClass("active");
  }
  });

  $("#green").on("click", function (){
    if ( $("#green").hasClass("active")) {
    $("#green").removeClass("active");
  } else {
    $("#green").addClass("active");
  }
  });

});
