$('div.bulb').on('click', function() {
    var bulb = this;
    $(bulb).toggleClass('active');
    if ($(bulb).attr('id') == 'yellow') {
      setTimeout (function() {
        $(bulb).css('background', 'red');
      }, 2000);
    };
});
