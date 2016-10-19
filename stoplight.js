$(".bulb").on("click", function() {

var onOrNot= $(this).attr("class");
console.log(onOrNot);

if (onOrNot === "bulb") {
  $(this).addClass("active");
} else {
  $(this).removeClass("active");
}
})
