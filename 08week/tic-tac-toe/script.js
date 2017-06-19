$(document).ready(function() {
  var turn = 1;
  var square = ['div[data-cell="0"]', 'div[data-cell="1"]', 'div[data-cell="2"]', 'div[data-cell="3"]', 'div[data-cell="4"]', 'div[data-cell="5"]', 'div[data-cell="6"]', 'div[data-cell="7"]', 'div[data-cell="8"]'];
// jquery .click event
  $('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').on( 'click', function(){

     if (turn % 2 === 0) {
       var playerTurn = 'O';
     } else {
       var playerTurn = 'X';
     };

// If space is taken, will not override
     if (this.innerHTML) {
       return false;
     };

         $(this).text(playerTurn);

     //If game ends, the board will not do anything
     if ($('#announce-winner').html().length > 0) {
       return false;
     };


//See if there is a winner/ alert page viewers of a win -->
    if ((($(square[0]).text() === playerTurn) && ($(square[1]).text() === playerTurn) && ($(square[2]).text() === playerTurn)) || (($(square[3]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[5]).text() === playerTurn)) || (($(square[6]).text() === playerTurn) && ($(square[7]).text() === playerTurn) && ($(square[8]).text() === playerTurn)) || (($(square[6]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[2]).text() === playerTurn)) || (($(square[0]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[8]).text() === playerTurn)) || (($(square[0]).text() === playerTurn) && ($(square[3]).text() === playerTurn) && ($(square[6]).text() === playerTurn)) || (($(square[1]).text() === playerTurn) && ($(square[4]).text() === playerTurn) && ($(square[7]).text() === playerTurn)) || (($(square[2]).text() === playerTurn) && ($(square[5]).text() === playerTurn) && ($(square[8]).text() === playerTurn))) {
      $('#announce-winner').text(playerTurn + ' is the Winner, Great Job!');
      turn = 1;
      if ($('#announce-winner').html().length > 0) {
        if (turn <= 6) {
          alert("You Won A Game of Tic-Tac-Toe!");
      }
      };
    };
  turn++;
});

// click function to clear board
$('#clear').click(function() {
  $('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').text('');
  $('#announce-winner').text('');
  });
});
