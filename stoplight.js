$(document).ready(function(){

light = $("div > div")


  light.on("click", function(){
    // if (light.hasClass("bulb")) {
    //   $(this).addClass("active")
    // }
    if (light.hasClass("active")) {
      $(this).removeClass("active")
      }
      else {
        $(this).addClass("active")
      }

})

$("#yellow").on("click", function(){
  $(this).addClass("active");
  setTimeout(function(){$("#red").addClass("active");
  $("#yellow").removeClass("active")
  }, 2000)

  })

})


//  setTimeout(function(){$("#guess").attr("placeholder", "Try again")}, 900)
