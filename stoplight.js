$(document).ready(function() {
  //Red Light
  $("#red").on('click', function(){
    $(this).toggleClass('active');
    $("#yellow").removeClass('active');
  });
  //Yellow light
  $("#yellow").on('click', function(){
    $(this).toggleClass('active');
    $("#red").removeClass('active')
    //Switch to Red after 2 seconds
    var switchRed = setInterval(function(){
      $("#red").addClass('active');
      $("#yellow").removeClass('active');
    }, 2000);
  });
});
