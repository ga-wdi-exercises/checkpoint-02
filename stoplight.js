$(".bulb").on("click", function() {
  $(".bulb").removeClass("active");
  $(this).toggleClass("active");
  if ($(this).attr("id") == "yellow") {
    setTimeout (function() {
      $("#red").toggleClass("active");
      $("#yellow").removeClass("active");
    }, 2000);
  }
});
