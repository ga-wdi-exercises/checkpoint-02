$('.bulb').on('click',function(){
  switch ($(this).is('.active')){
    case true:
      $(this).removeClass('active');
      break;
    case false:
      $(this).addClass('active');
      break;
  }
})
