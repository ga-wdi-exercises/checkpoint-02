var redLight = $(".bulb#red")
var greenLight = $(".bulb#green")
var yellowLight = $(".bulb#yellow")


if(greenLight.hasClass("active")) {
  greenLight.click(function(){$(this).removeClass("active")
  })
}
else{ greenLight.click(function(){$(this).addClass("active")
})
}


if(redLight.hasClass("active")) {
  redLight.click(function(){$(this).removeClass("active")
  })
}
else {
redLight.click(function(){$(this).addClass("active")
})
}

if(yellowLight.hasClass("active")) {
  yellowLight.click(function(){$(this).removeClass("active")
  })
}
else {
yellowLight.click(function(){$(this).addClass("active")
})
}
