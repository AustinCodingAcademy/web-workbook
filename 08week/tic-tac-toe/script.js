'use strict';

$(document).ready(function() {
  //Tell the users' who’s turn it is

  var player = 1;
  $('.playerTurn').html('Player ' +  player  + 's turn');

  // Function to mark cell and declare winner or another box

  $('div').click(function() {
    var cell = $(this);
    if (cell.attr('data-cell')) {
      console.log(cell.attr('class'));
      if (!cell.hasClass('X') && !cell.hasClass('O')) {
        var className = 'O';
        if (player === 1) {
          className = 'X'
        }
        console.log(className);
        cell.addClass(className);
        console.log(checkIfPlayerWon(className));
        if (checkIfPlayerWon(className)){
          alert('Congrats! Player' + player + 'has won!')
        }else{
          if (player === 1) {
            player = 2
          } else {
            player = 1
          }
          $('.playerTurn').html('Player ' + player + 's turn');
        }
      } else {
        alert('DOH! Please choose another box or clear the board!');
      }
    }
  })


// Check for win function
function checkIfPlayerWon (symbol){
  if ($('#cell0').hasClass(symbol) && $('#cell1').hasClass(symbol) & $('#cell2').hasClass(symbol)){
    return true;
  }else if ($('#cell3').hasClass(symbol) && $('#cell4').hasClass(symbol) & $('#cell5').hasClass(symbol)){
    return true;
  } else if ($('#cell6').hasClass(symbol) && $('#cell7').hasClass(symbol) & $('#cell8').hasClass(symbol)){
                  return true;
                }
                else if ($('#cell0').hasClass(symbol) && $('#cell3').hasClass(symbol) & $('#cell6').hasClass(symbol)){

                  return true;
                }
                else if ($('#cell1').hasClass(symbol) && $('#cell4').hasClass(symbol) & $('#cell7').hasClass(symbol)){

                  return true;
                }
                else if ($('#cell2').hasClass(symbol) && $('#cell5').hasClass(symbol) & $('#cell8').hasClass(symbol)){

                  return true;
                }
                else if ($('#cell0').hasClass(symbol) && $('#cell4').hasClass(symbol) & $('#cell8').hasClass(symbol)){

                  return true;
                }
                else if ($('#cell2').hasClass(symbol) && $('#cell4').hasClass(symbol) & $('#cell6').hasClass(symbol)){

                  return true;
                }
}

// Clear the board
  $("#clear").click(function() {
    $('div').removeClass('O');
    $('div').removeClass('X');

  });
});




/**  Code Plan
If the user clicks on a div with a data cell attr, put the corresponding marker in the cell
Only one marker per cell
Only allow player 1 one turn, then go to player 2
Player 1 = O Player 2 = X
Rotate turns until there is a winner or a tie
Check after each turn to see if there is a winner by getting 3 in a row
X winner is declared if the following is true:
3 x’s in cells 0, 1, 2
3 x’s in cells 3, 4, 5
3 x’s in cells 6, 7, 8
3 xs in cells 0, 3, 6
3 x’s in cells 1, 4, 7
3 x’s in cells 2, 5, 8
3 x’s in cells 0. 4, 8
3 x’s incells 2, 4, 6
O winner is declared if following it true:
3 O’s in cel 0, 1, 2
3 O’s in cell 3, 4, 5
3 O’s in cells 6, 7, 8
3 O’s in cells 0, 3, 6
3 O’s in cells 1, 4, 7
3 O’s in cells 2, 5, 8
3 O’s in cells 0. 4, 8
3 O’s incells 2, 4, 6
If these conditions are net met when all squares are filled on the game then a “Tie” is declared
If user clicks clear board button it clears all cells on the board **/
