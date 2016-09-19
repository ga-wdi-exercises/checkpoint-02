alert ("working")

$(document).ready(function () {
    ('red').click(function(e) {

        ('stoplight').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});
