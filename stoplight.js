$(document).ready(function(){
 $('div.bulb').removeClass('active');

});



$("#red").click(function(){
  //  $(this).css("background-color", "red");
    $('#red').toggleClass('active');
    $('#green').removeClass('active');

  });
  $("#yellow").click(function(){
      //$(this).css('background-color', 'yellow');
      $('#yellow').toggleClass('active');
      $('#green').removeClass('active');

    });
    $("#green").click(function(){
        //$(this).css('background-color', 'green');
        $('#green').toggleClass('active');
        $('#yellow').removeClass('active');
        $('#red').removeClass('active');
      });


$("#yellow").click(function(){
  $("#yellow").addClass("active");
  setTimeout(
    function(){
    $(".bulb").removeClass("active");
    $("#red").addClass("active");

  },2000)
});
