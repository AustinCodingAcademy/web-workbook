$(document).ready(function() {
    let playerTurn = 'X';
    $('[data-cell]').on('click', function() {
      $(this).text('playerTurn');
      if
      $('[data-cell="0"]').text === playerTurn &&
        $('[data-cell="3"]').text === playerTurn &&
        $('[data-cell="6"]').text === playerTurn {
          console.log('${playerTurn} Wins!');

          if (playerTurn === "X") {}
          playerTurn = 'O';
        } else {
          playerTurn = 'X'
        }
    });

    function checkForWin() {
      if (

      )
    }

  }

}
