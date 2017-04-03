$(document).ready(function(){
  //this is finshed for yellow to turn on
$("#stoplight #yellow").on("click",function(){
  setInterval(function(){
    $("#stoplight #yellow").css("background-color","yellow");
  },1000);

});
//this is finshed for green to turn on
$("#stoplight #green").on("click",function(){
  setInterval(function(){
    $("#stoplight #green").css("background-color","green");
  },1000);

});
$("#stoplight #red").on("click",function(){
$("#stoplight #red").stop();
});
});
