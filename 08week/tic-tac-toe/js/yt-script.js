'use strict';

$(document).ready(function() {
  // Put app logic in here
	var x = "x";
	var o = "o";
	var turns = 0;

	var 0 = $("0");
	var 1 = $("1");
	var 2 = $("2");
	var 3 = $("3");
	var 4 = $("4");
	var 5 = $("5");
	var 6 = $("6");
	var 7 = $("7");
	var 8 = $("8");
	var 9 = $("9");
  
$('data-cell').click(function(){
  if($("0".hasClass("o") && "1".hasClass("o") && "2".hasClass("o") ||
  $("3".hasClass("o") && "4".hasClass("o") && "5".hasClass("o") ||
  $("6".hasClass("o") && "7".hasClass("o") && "8".hasClass("o") ||
  $("0".hasClass("o") && "3".hasClass("o") && "6".hasClass("o") ||
  $("1".hasClass("o") && "4".hasClass("o") && "7".hasClass("o") ||
  $("2".hasClass("o") && "5".hasClass("o") && "8".hasClass("o") ||
  $("0".hasClass("o") && "4".hasClass("o") && "8".hasClass("o") ||
  $("2".hasClass("o") && "4".hasClass("o") && "6".hasClass("o")

		){
		alert("Winner is O");
		$('data-cell').text('+');
			$('data-cell').removeClass('disable');
			$('data-cell').removeClass('o');
			$('data-cell').removeClass('x');

	} else if($("0".hasClass("x") && "1".hasClass("x") && "2".hasClass("x") ||
  $("3".hasClass("x") && "4".hasClass("x") && "5".hasClass("x") ||
  $("6".hasClass("x") && "7".hasClass("x") && "8".hasClass("x") ||
  $("0".hasClass("x") && "3".hasClass("x") && "6".hasClass("x") ||
  $("1".hasClass("x") && "4".hasClass("x") && "7".hasClass("x") ||
  $("2".hasClass("x") && "5".hasClass("x") && "8".hasClass("x") ||
  $("0".hasClass("x") && "4".hasClass("x") && "8".hasClass("x") ||
  $("2".hasClass("x") && "4".hasClass("x") && "6".hasClass("x")

		){
		alert("Winner is X");
		$('data-cell').text('+');
			$('data-cell').removeClass('disable');
			$('data-cell').removeClass('o');
			$('data-cell').removeClass('x');

	} else if(turns == 8){
		alert("Tie Game");
		$('data-cell').text('+');
			$('data-cell').removeClass('disable');
			$('data-cell').removeClass('o');
			$('data-cell').removeClass('x');
		turns = 0;

	} else if($(this).hasClass('disabled')){
		alert('This spot is already filled');

	} else if(turns%2 == 0){
		turns++;
		$(this).text(o);
		$(this).addClass('disable o');
		if($("0".hasClass("o") && "1".hasClass("o") && "2".hasClass("o") ||
		$("3".hasClass("o") && "4".hasClass("o") && "5".hasClass("o") ||
		$("6".hasClass("o") && "7".hasClass("o") && "8".hasClass("o") ||
		$("0".hasClass("o") && "3".hasClass("o") && "6".hasClass("o") ||
		$("1".hasClass("o") && "4".hasClass("o") && "7".hasClass("o") ||
		$("2".hasClass("o") && "5".hasClass("o") && "8".hasClass("o") ||
		$("0".hasClass("o") && "4".hasClass("o") && "8".hasClass("o") ||
		$("2".hasClass("o") && "4".hasClass("o") && "6".hasClass("o")

		){
			alert('Winner: O');
			turns = 0;
		}
		} else {
			turns++;
		$(this).text(x);
		$(this).addClass('disable x');
    if($("0".hasClass("x") && "1".hasClass("x") && "2".hasClass("x") ||
		$("3".hasClass("x") && "4".hasClass("x") && "5".hasClass("x") ||
		$("6".hasClass("x") && "7".hasClass("x") && "8".hasClass("x") ||
		$("0".hasClass("x") && "3".hasClass("x") && "6".hasClass("x") ||
		$("1".hasClass("x") && "4".hasClass("x") && "7".hasClass("x") ||
		$("2".hasClass("x") && "5".hasClass("x") && "8".hasClass("x") ||
		$("0".hasClass("x") && "4".hasClass("x") && "8".hasClass("x") ||
		$("2".hasClass("x") && "4".hasClass("x") && "6".hasClass("x")

		){
			alert('Winner: X');
			turns = 0;

		}
	}
		});
	//reset handler
		$('#clear').on('click', function(){
			alert("Winner is X");
		$('data-cell').text('+');
			$('data-cell').removeClass('disable');
			$('data-cell').removeClass('o');
			$('data-cell').removeClass('x');
			turns = 0;
		});


});
