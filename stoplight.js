$(document).ready (function() {

  $("#red").on("click", function (){
    if ( $("#red").hasClass("active")) {
    $("#red").removeClass("active");
  } else {
    $("#red").addClass("active");
  }
  });

  $("#yellow").on("click", function (){
    function remove() {
      $("#yellow").removeClass("active");
      $("#red").addClass("active");
    }
    if ($("#yellow").hasClass("active")) {
      setTimeout(remove,2000);
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
