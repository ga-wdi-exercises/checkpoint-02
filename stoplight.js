$('div').on('click', light)
function light(){
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
}
