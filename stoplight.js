$("#red").on("click", function(){
  $("red").toggleClass("activered");
  // if(this.css().background-color === "#333")){
  //   $(this).addClass(active);
  // console.log(this)
  // } else{
  //   $(this).removeClass(active);
});
$("#yellow").on("click", function(){
  $("#yellow").css("background-color", "yellow");
})
$("#green").on("click", function(){
  $("#green").css("background-color", "green");
})
