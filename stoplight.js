//create variable for all bulbs
var $bulbs = $('.bulb');
var $yellow = $('#yellow');
var $red = $('#red');

//register event listener
$bulbs.on('click', function() {
  activate($(this));
})

$yellow.on('click', function(){
  window.setTimeout(function() {
    activate($red);
  }, 2000)
})

function activate(bulb) {
  //remove active class from all bulbs
  $bulbs.removeClass('active');
  //add active class to the bulb we clicked on
  bulb.addClass('active');
}
