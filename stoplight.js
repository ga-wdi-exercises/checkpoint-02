$("#red").click(changeLight)
$("#yellow").click(changeLight)
$("#green").click(changeLight)

function changeLight(){
  if ($(this).hasClass("active")) {
    ($(this).removeClass("active"))
  }
  else if ($(this).attr("id") == "red") {
    $("#red").addClass("active")
  }
  else if ($(this).attr("id") == "yellow"){
    $("#yellow").addClass("active")
    setTimeout(yellowToRed, 2000)
  }
  else if ($(this).attr("id") == "green"){
    $("#green").addClass("active")
  }
}

function yellowToRed(){
  $("#yellow").removeClass("active")
  $("#red").addClass("active")
}
