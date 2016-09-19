//create variable for all bulbs
var $bulb = $('.bulb');

//register event listener
$bulb.on('click', function() {
  //remove active class from all bulbs
  $bulb.removeClass('active');
  //add active class to the bulb we clicked on
  $(this).addClass('active');
})
