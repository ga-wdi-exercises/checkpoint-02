/*var redLight = $("#red");
var redLight =button.on("click", function changeBackgroundColorToRed(){
})

var yellowLight = $("#yellow");
var yellowLight = button.on("click", function changeBackgroundColorToYellow(){
})

var greenLight = $("#green");
var greenLight = button.on("click", function changeBackgroundColorToGreen(){
})*/

$(function() {
$('#red').click(function(){
    $(this).css('background', 'red');

  });
});
$(function() {
$('#yellow').click(function(){
    $(this).css('background', 'yellow');

  });
});
$(function() {
$('#green').click(function(){
    $(this).css('background', 'green');

  });
});
