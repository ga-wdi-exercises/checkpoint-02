// Create an event listener(s) so that when you click on a light, it turns to its respective color (i.e., top light turns red).
//
// If you click a light that is already on, it turns off.
//
// If you click yellow, it switches to red after two seconds.
//
// Make it so that only one light can be turned on at a time (e.g., both red and yellow cannot be on at the same time).






$(document).ready(function() {

var bulb = $(".bulb")
var stopLight = $("#stoplight")
var yellowLight = $("#yellow")
var redLight = $("#red")

bulb.on("click", function() {
  stopLight.find('.active').removeClass("active")

  stopLight.find('.active').removeClass("active")
  newLit = $(this)
  newLit.addClass("active")
  if (newLit.hasClass("yellow")) {
    setTimeout( function() {
    yellowLight.removeClass("active")
    redLight.addClass("active")
}, 2000);
}
})
})
