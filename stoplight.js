$('.bulb').on('click',function(){
  switch ($(this).is('.active')){
    case true:
      $(this).removeClass('active');
      break;
    case false:
      $(this).addClass('active');
      break;
  }
  if($(this).is('#yellow')){
    var myTimer = setTimeout(function(){
      $('#yellow').removeClass('active')
      $('#red').addClass('active')
    },2000)
  }
})
