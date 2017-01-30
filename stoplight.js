$("#red").click(turnOn)
$("#yellow").click(turnOn)
$("#green").click(turnOn)

function turnOn(){
  if ($(this).attr("id") == "red") {
    $("#red").addClass("active")
  }
  if ($(this).attr("id") == "yellow"){
    $("#yellow").addClass("active")
  }
  if ($(this).attr("id") == "green"){
    $("#green").addClass("active")
  }
}
