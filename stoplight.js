$(document).ready(function(){

	$('.bulb').on("click",function(){

		$(this).toggleClass("active")

	})
	$('#yellow').on("click",(function(){

		setTimeout(lightTimer, 2000)

	}))
	function lightTimer() {
		$('#red').addClass('active')
	}

})