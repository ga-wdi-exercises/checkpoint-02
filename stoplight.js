$( document ).ready(function() {
    console.log( "ready!" );
});

$( function() {
  $('#red').click( function() {
    $(this).toggleClass("active#red");
  } );
} );
