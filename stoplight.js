$('#stoplight').children().on('click', function(){
  $(this).toggleClass('active');
  $('#red').on('click', function(){
    $(this).toggleClass('active')
    $('#yellow').removeClass('active')
    $('#green').removeClass('active')
  })
  $('#yellow').on('click', function(){
    $(this).toggleClass('active')
    $('#red').removeClass('active')
    $('#green').removeClass('active')
  })
  $('#green').on('click', function(){
    $(this).toggleClass('active')
    $('#red').removeClass('active')
    $('#yellow').removeClass('active')
  })
})
