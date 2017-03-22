$(function() {
  let playerTurn = 'X';
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);
    checkWin()
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
  });
  $('#clear').click(clearBoard)


  function checkWin() {
    if (
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn ||
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn ||
      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="2"]').text() === playerTurn ||
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn ||
      $('[data-cell="6"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||
      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn)
      {
      $('#announce-winner').text(`${playerTurn} Wins`)
      } else {
      return false;
      }
  }
})
 function clearBoard()  {
   $('[data-cell]').empty();
 }
