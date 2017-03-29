// Walk the class through these examples in the console of today's Lesson.

jQuery('#box')

jQuery('.chapter')

// tired of writing jQuery, so $ is used.

$('#box')

// Now move on to the LOOK AT ME! example

$('#text-change')

// show the object in the console and put it in the variable
// use $ for the variable - its conventional to show that the variable is from the DOM

var $textChange = $('#text-change')

// Show all the possible methods you can add to the variable
// Steriods for the DOM - million methods

$textChange.fadeOut()

$textChange.fadeIn()

$textChange.slideUp()
// this is how you utilize an accordion functionality

$textChange.slideDown()

// How to change the CSS
$textChange.css('color', 'green')

// How to change the textChange

$textChange.text('Pow!')

// You can also change attributes, like we did with css

// Special Data attribute where you can attach a piece of data. This example isn't interactive. It looks for an attribute with the data- and return the value. You can also update the value of a data cell.

// CALLBACK FUNCTIONS

// We used callback function with the "onclick()" from Winery assignment. A callback function is waiting for something to happen before doing its job. Like waiting for a table at Chili's and they give you a buzzer to go off when its your turn.

// Execute this example in console: 

$('#box').click(function(){
  $(this).css('color', 'red'); // .css() can be used to add css styles!
});
