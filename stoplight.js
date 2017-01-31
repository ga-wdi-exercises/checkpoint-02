var red = $("#red")
var yellow = $("#yellow")
var green = $("#green.bulb")

red.on("click", turnRed)
yellow.on("click", turnYellow)
green.click(function(){
  green.toggleClass("active")});


function turnRed(){
  red.addClass("active")
}
function turnYellow(){
  yellow.addClass("active");
  setInterval(function(){
    yellow.removeClass("active");}, 2000);
  }
