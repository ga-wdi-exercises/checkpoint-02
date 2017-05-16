// Create an array called `colors` that contains three colors.
const colors = ['yellow', 'green', 'red'];
// Log the last item in the array to the console.
console.log(colors[2]);
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
for (var i = 0; i < colors.length; i++) {
    console.log(`My favorite color is ${colors[i]}`);
}
// Create an `instructor` object that contains three key-value pairs.
const instructor = {
    class: 'WDI',
    mood: 'Excited',
    computer: 'Macbook'
}
// Add a `facial-hair` property to `instructor`.
instructor["facial-hair"] = 'Beard';
// Log the value of the `facial-hair` property to the console.
console.log(instructor['facial-hair']);

const $bulbs = $('.bulb');

$bulbs.click(function(){
    if ($(this).hasClass('active') === true) {
        $(this).removeClass('active');
    } else if ($(this).attr('id') === 'yellow') {
        $bulbs.removeClass('active');
        $(this).addClass('active');
        setTimeout(function() {
            $bulbs.removeClass('active');
            $('#red').addClass('active');
        }, 2000)
    } else {
        $bulbs.removeClass('active');
        $(this).addClass('active');
    }
});
