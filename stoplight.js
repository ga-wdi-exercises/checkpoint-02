var pressOnRed = $("#stoplight #red")
var pressOnYellow = $("#stoplight #yellow")
var pressOnGreen = $("#stoplight #green")
var clearLight = $("#stoplight div")

//Clear stoplight

var changeLights = function(){
  if($("#stoplight").css("background-color") != "black"){
    clearLight.on("click").css({"background-color": "black"});
  }

  else if (pressOnRed.css("background-color") = "black"){
    pressOnRed.on("click").css({"background-color": "red"})
  }
  else if (pressOnYellow.css("background-color") = "black"){
    pressOnYellow.on("click").css({"background-color": "yellow"})
  }
  else if(pressOnGreen.css("background-color") = "black"){
    pressOnGreen.on("click").css({"background-color": "green"})
  }

};

changeLights();
