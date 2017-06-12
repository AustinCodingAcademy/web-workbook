'use strict';

$(document).ready(function () {
//app logic placed here//
  var turn = 1;
  var square = ['div[data-cell="0"]', 'div[data-cell="1"]', 'div[data-cell="2"]', 'div[data-cell="3"]', 'div[data-cell="4"]', 'div[data-cell="5"]', 'div[data-cell="6"]', 'div[data-cell="7"]', 'div[data-cell="8"]'];
//click event//
  $('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').on('click', function (){
//begin, select player//
    if (turn % 2 === 0) {
      var playerTurn = 'o';
  } else {
      var playerTurn = 'x';
    };
//If game is over do nothing
    if ($('#announce-winner').html().length > 0) {
      return false;
    };
//if square is occupied, do not allow another turn
    if (this.innerHTML) {
      return false;
    };
//Take turn//
    $(this).text(playerTurn);
//next turn for opposite player//
    turn++;

//checking for WINNER
   if ((($(square[0]).text() === playerTurn) && ($(square[1]).text() === playerTurn) && ($(square[2]).text() === playerTurn)) || (($(square[3]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[5]).text() === playerTurn)) || (($(square[6]).text() === playerTurn) && ($(square[7]).text() === playerTurn) && ($(square[8]).text() === playerTurn)) || (($(square[0]).text() === playerTurn) && ($(square[3]).text() === playerTurn) && ($(square[6]).text() === playerTurn)) || (($(square[1]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[7]).text() === playerTurn)) || (($(square[2]).text() === playerTurn) && ($(square[5]).text() === playerTurn) && ($(square[8]).text() === playerTurn)) || (($(square[0]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[8]).text() === playerTurn)) || (($(square[2]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[6]).text() === playerTurn))) {
    $('#announce-winner').text(playerTurn + " " + "wins!");
   };
 });
});

//clear out board
$('#clear').click(function() {
$('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').text('');
$('#announce-winner').text('');
});
