var $lights = $("#stoplight .bulb");

var clickLight = function() {
  console.log(this);
  $lights.removeClass("active");
  $(this).addClass("active");
}

$lights.on("click",clickLight);
