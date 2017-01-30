$('#stoplight').find('div').on('click',clickedLight);
isBulbLit = $(this).attr('class');
console.log(isBulbLit)
// function clickedLight(){
//   previouslyLit.removeClass('bulb active').addClass('bulb');
//   $(this).addClass('bulb active');
// }
