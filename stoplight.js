// event listeners to when click on light, it turns to its respective color
// $('#red').on('click',function () {
//   $('#red').addClass('active');
// })
// $('#yellow').on('click',function () {
//   $('#yellow').addClass('active');
// })
// $('#green').on('click',function () {
//   $('#green').addClass('active');
// })
// click a light that is on/ turns it off
$('#red').on('click',function () {
  $('#red').toggleClass('active');
})
$('#yellow').on('click',function () {
  $('#yellow').toggleClass('active');
})
$('#green').on('click',function () {
  $('#green').toggleClass('active');
})
//  click yellow, and it switches to red after 2 seconds

//make it so that only one light can be turned on at a time.
