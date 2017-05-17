$( document ).ready(function() {
    $('.bulb').on('click', function() {
      color = $(this).attr('id');
      bkColor = $(this).css('background-color');
      console.log(bkColor)

      if (bkColor === 'rgb(85, 85, 85)') { //if grey light it up
        if (color === 'yellow') {
          $('.bulb').css('background-color', 'rgb(85, 85, 85)');
          $('#'+color).css('background-color', color);
          setTimeout(function(){
            $('.bulb').css('background-color', 'rgb(85, 85, 85)');
            $('#red').css('background-color', 'red');
          }, 2000);
        }
        $('.bulb').css('background-color', 'rgb(85, 85, 85)');
        $('#'+color).css('background-color', color);
      }
      else if (bkColor !== 'rgb(85, 85, 85)') { //if color turn it off
        $('.bulb').css('background-color', 'rgb(85, 85, 85)');
        $('#'+color).css('background-color', 'rgb(85, 85, 85)');
      }
    })
});
