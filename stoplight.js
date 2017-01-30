$(document).ready(function(){
  $('#red').on('click', toggleClass);
  $('#yellow').on('click', toggleClass);
  $('#green').on('click', toggleClass);

function toggleClass(){
  var color =  $(this).attr('id');
  $(this).toggleClass('active');
  checkOtherLights(color);
  yellowCheck();
}

function checkOtherLights(color){
  for (i = 0; i < 3; i++){
    if(!($('.bulb').eq(i).attr('id')==color)){
      $('.bulb').eq(i).removeClass('active');
    }
  }
}

function yellowCheck(){
  if($('#yellow').hasClass('active')){
    setTimeout(function(){
      $('#yellow').removeClass('active');
      $('#red').addClass('active');
    }, 2000);
}}

});
