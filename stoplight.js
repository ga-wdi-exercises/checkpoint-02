$('#red').click(() => {
  $('.bulb').removeClass('active');
  $('#red').toggleClass( 'active');
});

$('#yellow').click(() => {
  $('.bulb').removeClass('active');
  $('#yellow').addClass( 'active')
  let lightTimer = setTimeout(() => {
    $('#yellow').removeClass( 'active');
    $('#red').addClass( 'active');},2000);
});

$('#green').click(() => {
  $('.bulb').removeClass('active');
  $('#green').toggleClass( 'active');
});
