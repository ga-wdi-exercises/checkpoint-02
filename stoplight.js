
$(document).ready(function(){

var yellow = $('#yellow');

$('#red').on( "click", function() {
  clearLights();
  $('#red').toggleClass('active');
});

$('#yellow').on( "click", function() {
  clearLights();
  $('#yellow').toggleClass('active');
});

$('#green').on( "click", function() {
  clearLights();
  $('#green').toggleClass('active');
});

function clearLights(){
  $('#red').removeClass('active');
  $('#yellow').removeClass('active');
  $('#green').removeClass('active');
}

});//end document ready
