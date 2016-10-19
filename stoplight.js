$(".bulb").on("click", function() {

var onOrNot= $(this).attr("class");

if (onOrNot === "bulb") {
  $(this).addClass("active");
} else {
  $(this).removeClass("active");
}
})

$("#yellow").on("click", function(){
  setTimeout(switchToRed, 2000);
  }
)

function switchToRed() {
  $("#yellow").removeClass("active");
  $("#red").addClass("active");
}
