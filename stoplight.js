let $red = $("#red");
let $yellow = $("#yellow");
let $green = $("#green");

$red.on('click', function() {
  $red.toggleClass("active");
})
$yellow.on('click', function() {
  $yellow.toggleClass("active");
})
$green.on('click', function() {
  $green.toggleClass("active");
})
