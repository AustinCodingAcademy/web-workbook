$(function() {
  let playerTurn = 'X';
  $('[data-cell]').on('click', function(event) {
    // event.preventDefault();
    // alert("Was preventDefault() called: " + event.isDefaultPrevented());
    $(this).text(playerTurn);

// Check to see if there's a winner
    if (checkWin()) {
      $('#announce-winner').text(playerTurn + " wins!");
// $('#announce-winner').text(`Player ${playerTurn} Wins!`);
    }
// Switches from X to O and visa versa
    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X'
    }
// playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

// Clears the board and fades a clean board back in
  $("button").on('click', function(event) {
    event.preventDefault;
    $("div[data-cell]").fadeOut(1000,function(){
      $("div[data-cell]").empty();
      $('#announce-winner').empty();
      $("div").fadeIn(1000);
      playerTurn = 'X';
    })
  })

// Check to see if there's a winner function
  function checkWin() {
    if(($('[data-cell="0"]').text() === playerTurn &&
       $('[data-cell="3"]').text() === playerTurn &&
       $('[data-cell="6"]').text() === playerTurn
     ) || ($('[data-cell="1"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="7"]').text() === playerTurn
        ) || ($('[data-cell="2"]').text() === playerTurn &&
             $('[data-cell="5"]').text() === playerTurn &&
             $('[data-cell="8"]').text() === playerTurn
           ) || ($('[data-cell="0"]').text() === playerTurn &&
                $('[data-cell="1"]').text() === playerTurn &&
                $('[data-cell="2"]').text() === playerTurn
              ) || ($('[data-cell="3"]').text() === playerTurn &&
                   $('[data-cell="4"]').text() === playerTurn &&
                   $('[data-cell="5"]').text() === playerTurn
                 ) || ($('[data-cell="6"]').text() === playerTurn &&
                      $('[data-cell="7"]').text() === playerTurn &&
                      $('[data-cell="8"]').text() === playerTurn
                    ) || ($('[data-cell="0"]').text() === playerTurn &&
                         $('[data-cell="4"]').text() === playerTurn &&
                         $('[data-cell="8"]').text() === playerTurn
                       ) || ($('[data-cell="2"]').text() === playerTurn &&
                            $('[data-cell="4"]').text() === playerTurn &&
                            $('[data-cell="6"]').text() === playerTurn
                          )
      )
        {
        return true;
       } else {
         return false;
       }
  }
})
