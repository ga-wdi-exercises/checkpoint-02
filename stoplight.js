let $red = $("#red");
let $yellow = $("#yellow");
let $green = $("#green");

$red.on('click', function() {
  $red.toggleClass("active");
  $yellow.removeClass("active");
  $green.removeClass("active");
})
$yellow.on('click', function() {
  $red.removeClass("active");
  $green.removeClass("active");
  $yellow.toggleClass("active");
  var myInterval = setTimeout(function () {
    $red.addClass("active");
    $yellow.removeClass("active");
  }, 2000);

})
$green.on('click', function() {
  $green.toggleClass("active");
  $red.removeClass("active");
  $yellow.removeClass("active");
})
