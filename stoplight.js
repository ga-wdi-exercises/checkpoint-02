$(document).ready(function(){
  $('.bulb').on("click", turnOn);
  function turnOn(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    } else {
    $(this).addClass('active');
  }
  }
})
