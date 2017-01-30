
$(document).ready(function(){


$('#red').on( "click", function() {
  console.log('clicked red');
  $('#red').toggleClass('active')
});

$('#yellow').on( "click", function() {
  console.log('clicked yellow');
  $('#yellow').toggleClass('active')
});

$('#green').on( "click", function() {
  console.log('clicked green');
  $('#green').toggleClass('active')
});



});//end document ready
