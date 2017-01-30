$("#red").on("click", function(){
  $("#red").css("background-color", "red");
});

$("#yellow").on("click", function(){
  $("#yellow").css("background-color", "yellow");
});

$("#green").on("click", function(){
  $("#green").css("background-color", "green");
});

$(".bulb").on("click", function(){
  if $("#green").css("background-color" == "green") {
   $("#green").css("background-color", "none");
 });
 /*else if (checkingBalance > 0) {
     $("#checking").css("background-color", "green");
   }
 if (checkingBalance < 0) {
     $("#checking .balance").html("$" + 0);
   });
//$(".bulb").on("click", function(){
  //if
  //$(".bulb").css("background-color", "none");
//});
