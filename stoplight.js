$(document).ready(function(){

  //Task #3
  // $('div').on('click', function(){
  //   $(this).addClass('bulb active');
  // });

  //Task #4, 5. 6
  $('div').on('click', function(){
    $('div').removeClass('bulb active');
    $(this).toggleClass('bulb active');
  });

  $('#yellow').on('click', function(){
    setTimeout(returnRed, 2000);
  });

  function returnRed(){
    $('#yellow').removeClass('bulb active');
    $('#red').addClass('bulb active');
  }

})
