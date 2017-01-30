var redLight = $("#red")
var greenLight = $("#green")
var yellowLight = $("#yellow")


greenLight.click(function(){
if (greenLight.hasClass("active")) {
  $(this).removeClass("active")
  }
else{$(this).addClass("active")
}
})

redLight.click(function(){
  if(redLight.hasClass("active")) {
  $(this).removeClass("active")
  }
else {
$(this).addClass("active")
}
})


yellowLight.click(function() {
  if(yellowLight.hasClass("active")) {
  $(this).removeClass("active")
  }
else {
$(this).addClass("active")
}
})
