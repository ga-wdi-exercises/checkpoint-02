// Q3 and Q4
$(".bulb").click(function(){
  if($(this).hasClass("active")) {
    $(this).removeClass("active")
  } else {
    $(".bulb").removeClass("active")
    $(this).addClass("active")
  }
})

// Q5


$("#yellow").click(
    function() {
        $("#yellow").addClass("active");
        setTimeout(
            function() {
              $("#yellow").removeClass("active");
              $("#red").addClass("active");
            },
            2000);
    });
