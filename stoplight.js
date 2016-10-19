$(".bulb").on("click", function() {

var onOrNot= $(this).attr("class");
var otherLights = $(this).siblings().attr("class");
var onLights = $(this).siblings();

console.log(onOrNot + "#");
console.log(otherLights + "$");

if (onOrNot === "bulb") {
  $(this).addClass("active");
} else {
  $(this).removeClass("active");
}
//
// if (otherLights === "bulb active") {
//   onLights.removeClass("active");
// } else {
//   return;
// }

})

$("#yellow").on("click", function(){
  setTimeout(switchToRed, 2000);
  }
)

function switchToRed() {
  $("#yellow").removeClass("active");
  $("#red").addClass("active");
}
