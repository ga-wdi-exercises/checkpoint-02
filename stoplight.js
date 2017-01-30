
$(document).ready(function () {
  $(".bulb").on("click", toggleLight);

});


function toggleLight(evt) {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  if ($(this).attr("id")  == "yellow") {
    setTimeout(function(){
      $("#red").addClass("active");
      $("#red").siblings().removeClass("active");
    }, 2000);
  }
}
