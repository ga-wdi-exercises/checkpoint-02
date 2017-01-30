$(document).ready(function(){
  // $(".bulb").click(function(){
  //   $(this).toggleClass("active");
  // });
  $(".bulb").click(function(){
    var thisBulb = $(this).attr('id');
    var otherBulbs = [];
    switch (thisBulb) {
      case "green":
        otherBulbs.push("yellow", "red");
        break;
      case "yellow":
        otherBulbs.push("green", "red");
        break;
      case "red":
        otherBulbs.push("green", "yellow");
        break;
    }

    $(this).addClass("active");
    otherBulbs.forEach(function(bulb){
      $(`#${bulb}`).removeClass("active");
    });

    
    switch(thisBulb) {
      case "green":
        setTimeout(function(){
          $("#green").toggleClass("active");
          $("#yellow").toggleClass("active");
        }, 2000);
        setTimeout(function(){
          $("#yellow").toggleClass("active");
          $("#red").toggleClass("active");
        }, 4000);
        break;
      case "yellow":
        setTimeout(function(){
          $("yellow").toggleClass("active");
          $("red").toggleClass("active");
        }, 2000);
        break;
    }
  });
});
