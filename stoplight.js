var myTimer
$('.bulb').on('click',function(){
  if(myTimer != undefined){
    clearTimeout(myTimer)
  }
  if(!($(this).is('.active')) && ($(this).siblings().is('.active'))){
    $(this).siblings('.active').removeClass('active')
  }
  switch ($(this).is('.active')){
    case true:
      $(this).removeClass('active');
      break;
    case false:
      $(this).addClass('active');
      break;
  }
  if($(this).is('#yellow')&&$(this).is('.active')){
    myTimer = setTimeout(function(){
      $('#yellow').removeClass('active')
      $('#red').addClass('active')
    },2000)
  }
})
