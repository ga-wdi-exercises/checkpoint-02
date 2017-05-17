$('#red').on('click',function() {
  var self = $(this).attr('class');
  if (self.includes('active') == true) {
    $(this).removeClass('active');
  }
  else {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  }
})
$('#yellow').on('click',function() {
  var self = $(this).attr('class');
  if (self.includes('active') == true) {
    $(this).removeClass('active');
  }
  else {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    setTimeout(function(){
      $('#yellow').removeClass('active');
      $('#yellow').siblings('#red').addClass('active');
    }, 2000);
  }
})
$('#green').on('click',function() {
  var self = $(this).attr('class');
  if (self.includes('active') == true) {
    $(this).removeClass('active');
  }
  else {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  }
})
