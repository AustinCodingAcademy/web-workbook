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
    //horizontal win
if ($('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="1"]'.hasClass("o") && 'div [data-cell="2"]'.hasClass("o") ||
    $('div [data-cell="3"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="5"]'.hasClass("o") ||
    $('div [data-cell="6"]'.hasClass("o") && 'div [data-cell="7"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
    //vertical win
    $('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="3"]'.hasClass("o") && 'div [data-cell="6"]'.hasClass("o") ||
    $('div [data-cell="1"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="7"]'.hasClass("o") ||
    $('div [data-cell="2"]'.hasClass("o") && 'div [data-cell="5"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
    //diagonal win
    $('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
    $('div [data-cell="2"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="6"]'.hasClass("o")

		){
		alert("Winner is O");
		$('data-cell').text('+');
			$('data-cell').removeClass('disable');
			$('data-cell').removeClass('o');
			$('data-cell').removeClass('x');

	} else {
    ($('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="1"]'.hasClass("x") && 'div [data-cell="2"]'.hasClass("x") ||
        $('div [data-cell="3"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="5"]'.hasClass("x") ||
        $('div [data-cell="6"]'.hasClass("x") && 'div [data-cell="7"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        //vertical win
        $('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="3"]'.hasClass("x") && 'div [data-cell="6"]'.hasClass("x") ||
        $('div [data-cell="1"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="7"]'.hasClass("x") ||
        $('div [data-cell="2"]'.hasClass("x") && 'div [data-cell="5"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        //diagonal win
        $('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        $('div [data-cell="2"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="6"]'.hasClass("x")

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
		if($('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="1"]'.hasClass("o") && 'div [data-cell="2"]'.hasClass("o") ||
        $('div [data-cell="3"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="5"]'.hasClass("o") ||
        $('div [data-cell="6"]'.hasClass("o") && 'div [data-cell="7"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
        //vertical win
        $('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="3"]'.hasClass("o") && 'div [data-cell="6"]'.hasClass("o") ||
        $('div [data-cell="1"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="7"]'.hasClass("o") ||
        $('div [data-cell="2"]'.hasClass("o") && 'div [data-cell="5"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
        //diagonal win
        $('div [data-cell="0"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="8"]'.hasClass("o") ||
        $('div [data-cell="2"]'.hasClass("o") && 'div [data-cell="4"]'.hasClass("o") && 'div [data-cell="6"]'.hasClass("o")

		){
			alert('Winner: O');
			turns = 0;
		}
		} else {
			turns++;
		$(this).text(x);
		$(this).addClass('disable x');
    if($('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="1"]'.hasClass("x") && 'div [data-cell="2"]'.hasClass("x") ||
        $('div [data-cell="3"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="5"]'.hasClass("x") ||
        $('div [data-cell="6"]'.hasClass("x") && 'div [data-cell="7"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        //vertical win
        $('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="3"]'.hasClass("x") && 'div [data-cell="6"]'.hasClass("x") ||
        $('div [data-cell="1"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="7"]'.hasClass("x") ||
        $('div [data-cell="2"]'.hasClass("x") && 'div [data-cell="5"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        //diagonal win
        $('div [data-cell="0"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="8"]'.hasClass("x") ||
        $('div [data-cell="2"]'.hasClass("x") && 'div [data-cell="4"]'.hasClass("x") && 'div [data-cell="6"]'.hasClass("x")
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
