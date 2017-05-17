$(document).ready(function(){
  $('.bulb').on("click", turnOn);
  function turnOn(){
    var self = $(this);
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    } else {
    $(this).addClass('active');
    if (this.id === "yellow"){
      setTimeout(myFunction, 2000);
      function myFunction(){
        $('#yellow').removeClass('active');
        $('#red').addClass('active');
        console.log("hello");
      }
    }
  }
  }
})
