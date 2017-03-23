
  $(function() {
    let playerUp = 'X';
    $('[data-cell]').click(function() {
      $(this).text(playerUp);

      if (checkWin()) {
        $('#announce-winner').text(`${playerUp} wins!`);
      } else {
        if (playerUp === 'X') {
          playerUp = 'O';
        } else {
          playerUp = 'X';
        }
      }
    })

    function checkWin() {
      if (
  // Column wins
        ($('[data-cell="0"]').text() === playerUp &&
          $('[data-cell="3"]').text() === playerUp &&
          $('[data-cell="6"]').text() === playerUp) ||

        ($('[data-cell="1"]').text() === playerUp &&
          $('[data-cell="4"]').text() === playerUp &&
          $('[data-cell="7"]').text() === playerUp) ||

        ($('[data-cell="2"]').text() === playerUp &&
          $('[data-cell="5"]').text() === playerUp &&
          $('[data-cell="8"]').text() === playerUp) ||
  // Row wins
        ($('[data-cell="0"]').text() === playerUp &&
          $('[data-cell="1"]').text() === playerUp &&
          $('[data-cell="2"]').text() === playerUp) ||

        ($('[data-cell="3"]').text() === playerUp &&
          $('[data-cell="4"]').text() === playerUp &&
          $('[data-cell="5"]').text() === playerUp) ||

        ($('[data-cell="6"]').text() === playerUp &&
          $('[data-cell="7"]').text() === playerUp &&
          $('[data-cell="8"]').text() === playerUp) ||
  // Diagonal wins
        ($('[data-cell="0"]').text() === playerUp &&
          $('[data-cell="4"]').text() === playerUp &&
          $('[data-cell="8"]').text() === playerUp) ||

        ($('[data-cell="2"]').text() === playerUp &&
          $('[data-cell="4"]').text() === playerUp &&
          $('[data-cell="6"]').text() === playerUp)

      ) {
        return true;
      } else {
        return false;
      }
    }

})
