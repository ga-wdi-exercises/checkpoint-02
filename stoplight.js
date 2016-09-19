console.log("hi");

// var button = $("#stoplight");
// function handlClickEvent() {
//   console.log("I was Clicked")
// }
document.getElementById('red').onclick = illuminateRed;
document.getElementById('yellow').onclick = illuminateYellow;
document.getElementById('green').onclick = illuminateGreen;
