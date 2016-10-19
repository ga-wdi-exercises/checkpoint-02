$(document).ready(function(){
  $('.bulb').on("click", turnOn);
  function turnOn(){
    $(this).addClass('active');
  }
})
