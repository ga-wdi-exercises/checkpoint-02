let $red = $("#red");
let $yellow = $("#yellow");
let $green = $("#green");

$red.on('click', function() {
  $red.toggleClass("active");
})
$yellow.on('click', function() {
  $yellow.toggleClass("active");
  setInterval(function () {
    $red.addClass("active");
    $yellow.removeClass("active");
  }, 2000);
})
$green.on('click', function() {
  $green.toggleClass("active");
})
