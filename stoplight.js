var isLightOn = false
$(".bulb").click(function(){
  if (isLightOn === false) {
    $(this).addClass('active')
    isLightOn = true
  } else {
    for ($(".bulb")).each(function(){
      $(this).removeClass('active')
    })
    // $(this).removeClass('active')

    isLightOn = false
  }
  }

// $("#yellow").on($(this).addClass('active'), (function() {
//   setTimeout(function() {
//     ($("#yellow").toggleClass('active'))
//     ($("#red").toggleClass('active'))
//   }, 2000)}))
