//Create an event listener(s) so that when you click on a light, it turns to its respective color (i.e., top light turns red).

//If you click a light that is already on, it turns off.

//If you click yellow, it switches to red after two seconds.

//Make it so that only one light can be turned on at a time (e.g., both red and yellow cannot be on at the same time).

$('.bulb').on('click', function() {
	// get color
	var color = $(this).attr('id');

	// if light is on, turn off
	if ($(this).is('.active')) {
		lightsOff();
		/*$(this).removeClass('active');
		$(this).css('background', '#555');*/
	} else {
		// otherwise turn light on, turn other lights off
		lightsOff();
		lightOn(color);

		// if yellow, wait 2 seconds, then change to red
		if ($(this).attr('id') == 'yellow') {
			setTimeout(function() {
				lightsOff();
				lightOn('red');
			}, 2000)
		}
	}
})

function lightsOff() {
	$('.bulb').css('background', '#555');
	$('.bulb').removeClass('active');
}

function lightOn(color) {
	light = '#' + color;
	$(light).css('background', color);
	$(light).addClass('active');
}
