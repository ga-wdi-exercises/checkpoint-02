let $red = $("#red");
let $yellow = $("#yellow");
let $green = $("#green");

$red.on('click', function() {
  clearInterval($yellow);
  $red.toggleClass("active");
  $yellow.removeClass("active");
  $green.removeClass("active");
})
$yellow.on('click', function() {
  $red.removeClass("active");
  $green.removeClass("active");
  $yellow.toggleClass("active");
  setInterval(function () {
    $red.addClass("active");
    $yellow.removeClass("active");
  }, 2000);
})
$green.on('click', function() {
  clearInterval($yellow);
  $green.toggleClass("active");
  $red.removeClass("active");
  $yellow.removeClass("active");
})
