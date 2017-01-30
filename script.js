var colors = ['blue', 'black', 'red'];

console.log(colors[2]);

for (i=0;i<colors.length;i++) {
  console.log("My favorite color is "+colors[i])
}

var instructor = {
  pay: 'not enough',
  hours: 'too long',
  productivity: 'high'
};

instructor['facial-hair'] = 'rad';

console.log(instructor['facial-hair']);

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
