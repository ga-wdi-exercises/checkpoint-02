$(document).ready(function(){
	let bulbs = $('.bulb');

	//click bulb turns on
	bulbs.on("click",function(){
		let that = $(this)

		bulbs.removeClass('active')

		that.addClass('active')
		
		// very buggie toggle features
		// if( that.hasClass('active') ){

		// 	that.removeClass('active')

		// }

		// $(this).toggleClass("active")

	})

	//yellow click event
	$('#yellow').on("click",(function(){

		setTimeout(lightTimer, 2000)

	}))

	//yellow light timer
	function lightTimer() {
		bulbs.removeClass('active')
		$('#red').addClass('active')
	}

})