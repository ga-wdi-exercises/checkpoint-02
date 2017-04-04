$('div.bulb').on('click', function() {
    var bulb = this;
    $('div.bulb').removeClass('active');
    $('#red').eq(1).attr('id', 'yellow');
    $(bulb).toggleClass('active');
    if ($(bulb).attr('id') == 'yellow') {
      setTimeout (function() {
        $(bulb).attr('id', 'red');
      }, 2000);
    };
});
