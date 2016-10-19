$(document).ready(function(){
  console.log("hello jQuery");

  $("div.bulb").on("click", changeColor);


  function changeColor(){
  var lightStatus = $(this).attr("class")

  $("div.bulb").each(function(i,elem){
        $(elem).removeClass("active");
    })

  $(this).addClass("active");

  if ($(this).attr("id") == "yellow"){
      setTimeout(changetoRed, 2000);
    }

}

function changetoRed (){
  $("div#yellow").removeClass("active");
  $("div#red").addClass("active");
}

});
