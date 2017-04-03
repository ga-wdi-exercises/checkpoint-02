$(document).ready(function () {
  //Red Light
  $("#red").on('click', function(){
    $("#red").toggleClass('active');
    $("#yellow").removeClass('active');
    clearInterval();
  })
  //Yellow light
  $("#yellow").on('click', function(){
    $("#yellow").toggleClass('active');
    $("#red").removeClass('active')
    //Switch to Red after 2 seconds
    setInterval(function(){
      $("#red").addClass('active');
      $("#yellow").removeClass('active');
    }, 2000);
  })

});
