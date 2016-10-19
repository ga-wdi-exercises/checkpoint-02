
$(document).ready(function () {
  $("#red").on("click", function(evt) {
    $("#green").removeClass("active");
    $("#yellow").removeClass("active");
    $(this).toggleClass("active");
  });

  $("#yellow").on("click", function(evt) {
    $("#yellow").removeClass("active");
    $("#red").removeClass("active");
    $(this).toggleClass("active");
    setTimeout(function () {
      $("#red").addClass("active");
      $("#yellow").removeClass("active");
    }, 2000);

  });

  $("#green").on("click", function(evt) {
    $(this).toggleClass("active");
    $("#yellow").removeClass("active");
    $("#red").removeClass("active");
  });

});
