$(document).ready(function() {
  $('#red').click(function() {
    $('#red').toggleClass("active");
  })

  $('#yellow').click(function() {
    $('#yellow').toggleClass("active");

    var changetoRed = setInterval(yellowChangeRed, 2000);

    function yellowChangeRed() {
      $('#red').toggleClass("active");
      clearInterval(changetoRed);
      $('#yellow, #green').removeClass("active");
    }

  })

  $('#green').click(function() {
    $('#green').toggleClass("active");
  })
})
