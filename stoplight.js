var bulb = $('.bulb');
var red = $('.active#red');
var yellow = $('.active#yellow');
var green = $('.active#green');



function handleClickEvent(){

  if( red === "active"){
    $(this).removeClass("active");
} else if( yellow === "active" ){
    $(this).removeClass("active");
} else {
  $(this).addClass("active");
}
}




// function removeClass(){
//   $(this).removeClass("active");
// }

bulb.on("click", handleClickEvent);
