var pressOnRed = $("#stoplight #red")
var pressOnYellow = $("#stoplight #yellow")
var pressOnGreen = $("#stoplight #green")
var clearLight = $("#stoplight div")

//Clear stoplight


  while($("#stoplight").css("background-color") != "black"){
    clearLight.on("click").css({"background-color": "black"});
  }

  if (pressOnRed.css() = "black"){
    pressOnRed.on("click").css({"background-color": "red"})
  }
