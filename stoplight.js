$("#red").on("click", function(){
  if($("#red").hasClass("activered")){
    this.addClass("activered");
  console.log(this)
  } else{
    $("#red").removeClass("activered");
}
});
$("#yellow").on("click", function(){
  $("#yellow").css("background-color", "yellow");
})
$("#green").on("click", function(){
  $("#green").css("background-color", "green");
})
