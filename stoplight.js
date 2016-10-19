$(document).ready(function(){
  console.log("YOYOYOY");

  $( "#yellow" ).toggle(
  function() {
    $( this ).addClass( "active#yellow" );
  }, function() {
    $( this ).removeClass( "active#yellow" );
  }
)

  $("#green").on("click", function(){
    $("#green").css("background-color", "green");
  })


})
