var pressOnRed = $("#stoplight #red")
var pressOnYellow = $("#stoplight #yellow")
var pressOnGreen = $("#stoplight #green")
var clearLight = $("#stoplight div")

//Clear stoplight

var changeRed = function(){
  if($("#stoplight #red").css("background-color") != "black"){
    pressOnRed.on("click").css({"background-color": "black"});
  }

  else{
    pressOnRed.on("click").css({"background-color": "red"})
  }
};

changeRed();

var changeYellow = function(){
  if($("#stoplight #yellow").css("background-color") != "black"){
    pressOnYellow.on("click").css({"background-color": "black"});
  }
else{
  pressOnYellow.on("click").css({"background-color": "yellow"})
}
}
changeYellow();


var changeGreen = function(){
  if($("#stoplight #green").css("background-color") != "black"){
    pressOnGreen.on("click").css({"background-color": "black"});
  }
else{
  pressOnGreen.on("click").css({"background-color": "green"})
  }
}

changeGreen();
