$(document).ready(function() {
  $('#red').click(function() {
    $('#yellow, #green').removeClass("active");
    $('#red').toggleClass("active");
  })

  $('#yellow').click(function() {
    $('#red, #green').removeClass("active");
    $('#yellow').toggleClass("active");

    var changetoRed = setInterval(yellowChangeRed, 2000);

    function yellowChangeRed() {
      $('#red').toggleClass("active");
      clearInterval(changetoRed);
      $('#yellow, #green').removeClass("active");
    }

  })

  $('#green').click(function() {
    $('#red, #yellow').removeClass("active");
    $('#green').toggleClass("active");
  })
})
