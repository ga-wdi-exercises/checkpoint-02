$(document).ready(function () {
  //Getting a referenceError abut $ is not defined. Why?

let light = $(".bulb")
function lightup(){
  console.log("I was clicked")
}
.bulb.on("click", lightup).addClass(".active#red")

});
