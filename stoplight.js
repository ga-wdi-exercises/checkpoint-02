bulb = $("#stoplight div")

console.log(bulb.css("id"))

bulb.on("click", activateBulb)

function activateBulb() {
  bulbId = this.id
  console.log(bulbId)
  $(this).toggleClass("active" + bulbId)
  if (bulbId == "yellow") {
    setTimeout(yellowTimer,2000)
  }
}

function yellowTimer(){
  console.log("yellowtimer!")
  $("#yellow").removeClass("activeyellow")
  $("#red").addClass("activered")
}
