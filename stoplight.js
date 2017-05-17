function toggleRed() {
  $("#red").toggleClass("active");
}

function toggleYellow() {
  $("#yellow").toggleClass("active");
}

function toggleGreen() {
  $("#green").toggleClass("active");
}

$("#red").on("click", function functionName() {
  if ($("#yellow").hasClass("active") || $("#green").hasClass("active")) {
    console.log("Error");
  } else {
    toggleRed();
  }
})

$("#yellow").on("click", function functionName() {
  if ($("#red").hasClass("active")) {
    console.log("Error");
  } else if ($("#green").hasClass("active")) {
    toggleGreen();
    toggleYellow();
    setTimeout(toggleYellow, 2000);
    setTimeout(toggleRed, 2000);
  } else {
  toggleYellow();
  setTimeout(toggleYellow, 2000);
  setTimeout(toggleRed, 2000);
}
})

$("#green").on("click", function functionName() {
  if ($("#yellow").hasClass("active")) {
    console.log("Error");
  } else if ($("#red").hasClass("active")) {
    toggleRed();
    toggleGreen();
  } else
  toggleGreen();
})
