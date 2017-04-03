$(document).ready(function () {
  //Red Light
  $("#red").on('click', function(){
    $("#red").toggleClass('active');
  })
  //Yellow light
  $("#yellow").on('click', function(){
    $("#yellow").toggleClass('active');
    setInterval(function(){
      $("#red").addClass('active');
      $("#yellow").removeClass('active');
    }, 2000);
  })

});
