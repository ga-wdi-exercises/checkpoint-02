// Initial Code
// $("#red").on('click', function() {
//   $("#red").addClass('active');
// });
//
// $("#yellow").on('click', function() {
//   $("#yellow").addClass('active');
// });
//
// $("#green").on('click', function() {
//   $("#green").addClass('active');
// });

//Refactor
// $(".bulb").on('click', function() {
//   $(this).addClass('active');
// });

//Toggle Functionality
$(".bulb").on('click', function() {
  $(this).toggleClass('active');
});
