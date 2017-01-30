$('div').on('click', function(changeColor){
  $( '#stoplight').css('div','.bulb');
  event.preventDefault(changeColor);
});

$('.active').on('click', switchOff);
