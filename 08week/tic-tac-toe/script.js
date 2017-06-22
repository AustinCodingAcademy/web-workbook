
//*missing logic - still need stalemate/draw condition in the event that all boxes are populated but no winning combo is present.
//I was able to get array function to work but ended up having to use addClass for x/o.
//will continue to see if I can replace with original (this).text('value') means of board population.

$(document).ready(function () {
//base var//
var player = 'x';
//stored//
var selectedBoxes = {
	'x' : [],
	'o' : [],
}

//Combinations for game win//
var winCombo = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

//board pop.//
$('.container').on('click', ".box:not('.box-x, .box-o')", function(event) {
	var $box = $(event.currentTarget);
	$box.addClass('box-' + player);

var indexoboxes = $('.container .box').index($box);
var currentBoxes = selectedBoxes[player]
currentBoxes.push(indexoboxes);

//Checks for Win.//
$.each(winCombo, function(index, combination) {
	var Allboxescheck = true;

$.each(combination, function(index, box) {
	if($.inArray(box, currentBoxes) === -1) {		
	Allboxescheck = false;
}
})

if (Allboxescheck) {
	alert(player + ' is the winner!');

}
})
//Token Swap//
if (player === 'x') {
	player = 'o';

} else {

	player = 'x';
}

//Clear button//
$("button").click(function() {
$("div").removeClass('box-x box-o');
currentBoxes.length = 0;
});

});
});