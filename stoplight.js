$('#red').click(() => {
  $('#red').toggleClass( 'active');
});

$('#yellow').click(() => {
  $('#yellow').addClass( 'active')
  setInterval(() => {
    $('#yellow').removeClass( 'active');
    $('#red').addClass( 'active');},2000);

});

$('#green').click(() => {
  $('#green').toggleClass( 'active');
});
