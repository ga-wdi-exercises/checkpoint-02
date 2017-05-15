var $lights = $("#stoplight .bulb");

var clickLight = function() {
  $lights.removeClass("active");
  $(this).addClass("active");
}

var lightChange = function($fromColor,$toColor) {
  $lights.removeClass("active");
  $toColor.addClass("active");
}

var delayChange = function() {
  setTimeout(lightChange,2000,$lights.eq(1),$lights.eq(0));
}

$lights.on("click",clickLight);
$lights.eq(1).on("click",delayChange);
