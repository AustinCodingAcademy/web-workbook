'use strict';

$(document).ready(function() {
  let playerMove = 'X'
  let checkValue = []

  $('div[data-cell]').click(function() {

    /* Instruct players to clear board if a winner or tie is found */
    if ($('#announce-winner').html() !== '') {
      alert('Game is over! Click "Clear Board" to play again.')
      return;

      /* Instruct players to select an unused tile */
    } else if ($(this).html() !== '') {
      alert('Already taken! Choose another tile.')
      return;

      /* Apply player's choice to tile */
    } else $(this).html(`${playerMove}`);
    if (playerMove === 'X') {
      playerMove = 'O';
    } else {
      playerMove = 'X';
    }

    /* Check to see if there are any empty tiles left */
    if (checkValue.length === 8) {
      $('#announce-winner').html('Tie game.')
    }

    /* Check for winner based on function below */
    if (checkWinner() !== '') {
      if (checkWinner() === 'X') {
        $('#announce-winner').html('Player X is the Winner!')
      } else {
        $('#announce-winner').html('Player O is the Winner!')
      }
    }

    function checkWinner() {
      let spaceOne = $('div[data-cell="0"]').text();
      let spaceTwo = $('div[data-cell="1"]').text();
      let spaceThree = $('div[data-cell="2"]').text();
      let spaceFour = $('div[data-cell="3"]').text();
      let spaceFive = $('div[data-cell="4"]').text();
      let spaceSix = $('div[data-cell="5"]').text();
      let spaceSeven = $('div[data-cell="6"]').text();
      let spaceEight = $('div[data-cell="7"]').text();
      let spaceNine = $('div[data-cell="8"]').text();

      /* Check the rows */
      if (spaceOne === spaceTwo && spaceTwo === spaceThree && spaceThree !== '') {
        return spaceOne
      } else if (spaceFour === spaceFive && spaceFive === spaceSix && spaceSix !== '') {
        return spaceSix
      } else if (spaceSeven === spaceEight && spaceEight === spaceNine && spaceNine !== '') {
        return spaceNine
      }

      /* Check the columns */
      if (spaceOne === spaceFour && spaceFour === spaceSeven && spaceSeven !== '') {
        return spaceSeven
      } else if (spaceTwo === spaceFive && spaceFive === spaceEight && spaceEight !== '') {
        return spaceEight
      } else if (spaceThree === spaceSix && spaceSix === spaceNine && spaceNine !== '') {
        return spaceNine
      }

      /* Check diagonally */
      if (spaceOne === spaceFive && spaceFive === spaceNine && spaceNine !== '') {
        return spaceNine
      } else if (spaceThree === spaceFive && spaceFive === spaceSeven && spaceSeven !== '') {
        return spaceSeven
      }
      
      /* Keep the text blank if none of the above match */
      else {
        return ''
      }
    }
    /* Testing results of function by capturing in an array */
    checkValue.push(checkWinner())
    console.log(checkValue)

    /* Clearing everything */
    $('#clear').click(function() {
      $('div[data-cell]').text('');
      $('#announce-winner').text('');
      playerMove = 'X';
      checkValue = [];
    });
  });
});
