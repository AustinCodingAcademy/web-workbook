$(document).ready(function() {
  let playerTurn = 'X';

  $('[data-cell]').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(playerTurn);
      checkForWin ();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
  });

  function checkForWin() {
    if (
      ($('[data-cell="0"]').text() === playerTurn &&
       $('[data-cell="3"]').text() === playerTurn &&
       $('[data-cell="6"]').text() === playerTurn) ||
      ($('[data-cell="1"]').text() === playerTurn &&
       $('[data-cell="4"]').text() === playerTurn &&
       $('[data-cell="7"]').text() === playerTurn) ||
      ($('[data-cell="2"]').text() === playerTurn &&
       $('[data-cell="5"]').text() === playerTurn &&
       $('[data-cell="8"]').text() === playerTurn) ||
      ($('[data-cell="0"]').text() === playerTurn &&
       $('[data-cell="1"]').text() === playerTurn &&
       $('[data-cell="2"]').text() === playerTurn) ||
      ($('[data-cell="3"]').text() === playerTurn &&
       $('[data-cell="4"]').text() === playerTurn &&
       $('[data-cell="5"]').text() === playerTurn) ||
      ($('[data-cell="6"]').text() === playerTurn &&
       $('[data-cell="7"]').text() === playerTurn &&
       $('[data-cell="8"]').text() === playerTurn) ||
      ($('[data-cell="0"]').text() === playerTurn &&
       $('[data-cell="4"]').text() === playerTurn &&
       $('[data-cell="8"]').text() === playerTurn) ||
      ($('[data-cell="2"]').text() === playerTurn &&
       $('[data-cell="4"]').text() === playerTurn &&
       $('[data-cell="6"]').text() === playerTurn)
     ) {
       $('#announce-winner').text(`Player ${playerTurn} Wins! :)`)
     }
   }

   $('#clear').click(function() {
     $('[data-cell] , #announce-winner').text(null);
     playerTurn = 'X';
   })

} )
