console.log($('title'))

$('.bulb').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $('.bulb').removeClass('active');
    $(this).addClass('active');
  }
})

$('#yellow').on('click', function() {
  $('#yellow').addClass('active');
  setTimeout(function() {
    $('#yellow').removeClass('active');
    $('#red').addClass('active');
  }, 2000)
})
