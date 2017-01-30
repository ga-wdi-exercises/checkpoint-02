alert('stoplight')

var red = $('#red')
var yellow = $('#yellow')
var green = $('#green')

// function lightChange() {
//   $(this).removeClass("bulb")
//   $(this).addClass("bulb active")
// }

$('#stoplight').children().on("click",function() {
  if ($(this).hasClass("bulb active")){
    $(this).removeClass("bulb active")
    $(this).addClass("bulb")
  }
  else {
  $(this).removeClass("bulb")
  $(this).addClass("bulb active")
}
  if ($(this).hasClass("bulb active")){
    $(this).siblings().removeClass("bulb active")
    $(this).siblings().addClass("bulb")
  }
  if ($(this).hasId("yellow")&& $(this).hasClass("bulb-active"))
  {
    $(this).setTimeout(yellowRed, 3000)
  }
})

function yellowRed() {
  $('.yellow').removeClass("bulb")
  $('yellow').addClass("bulb active")
  $('.red').removeClass("bulb")
  $('red').addClass("bulb active")
}




// $('#red').on("click",function() {
//   $(this).removeClass("bulb")
//   $(this).addClass("bulb active")
// })
//
//
// $('#yellow').on("click",function() {
//   $(this).removeClass("bulb")
//   $(this).addClass("bulb active")
// })
//
// $('#green').on("click",function() {
//   $(this).removeClass("bulb")
//   $(this).addClass("bulb active")
// })







// $('.square').on("click",function() {
// var color = $('#color-field').val()
// $(this).css("class","bulb-active")
// })
