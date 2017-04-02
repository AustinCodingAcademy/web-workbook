$(function() {
alert('tttscript accessed');
  let playerTurn = 'X';
//   var clickEvent;
//
// if ('onpointerdown' in window) {
//     // use 'pointerdown' if pointerEvent API is supported
//     clickEvent = 'pointerdown';
//     console.log('pointerEvents used');
// } else if ('ontouchstart' in window) {
//     // use 'touchstart' if touch device
//     clickEvent = 'touchstart';
//     console.log('touch device');
// } else {
//     // else use mouse event
//     clickEvent = 'click';
//     console.log('old fashioned mouse events');
// }

  $('[data-cell]').on('click', function(event) {
    event.preventDefault();
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
    event.preventDefault();
    alert("clear button pushed");
    $("div a[data-cell]").fadeOut(1000,function(){
      $("div a[data-cell]").empty();
      $('#announce-winner').empty();
      $("div a").fadeIn(1000);
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
