$("document").ready(function(){
  console.log("hello");


  var $stopLight = $("#stopLight")
  var redlight = $("#red");
  var yellowlight = $("#yellow");
  var greenlight = $("#green");
  var color;
  var working;


  function changeColor(bulb,working){
    working = !true
    if (working == !true ){
      bulb.css("background-color", color);
    }
    if(working == true){
      bulb.css("background-color", "grey");
    }
  };




      redlight.on("click", function(){
        working = true;
        bulb = this
        color= "red";
        changeColor(bulb,color)
      });





      yellowlight.on("click", function(){
        yellowlight.addClass("active")

      });

      greenlight.on("click", function(){
        greenlight.addClass("active")

      });


});
