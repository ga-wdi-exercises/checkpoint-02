$(document).ready(function() {

    var light = $('.bulb');

    var handleBulbClick = function() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active');
    }
    light.on('click', handleBulbClick)
    

    // var yellow = $('#yellow');

    // var yellowToRed = function() {
    //     if ( $('#yellow').hasClass('active') ) {
    //         // $(this).delay(2000)
    //         console.log('hi 1')
    //         $(this).removeClass('active').delay(2000)
             
    //         $('#red').addClass('active');
    //          console.log('hi 3')
    //     } else {
    //         console.log("not yello")

    //     }

    // }
    // yellow.on('click', yellowToRed)

})