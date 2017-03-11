$(
  function() {
  let $player = 'X';
  $('#current-turn').text($player);
  $('[data-cell]').click(function() {
    $(this).text($player);
    if ($player === 'X') {
      $player = 'O';
      checkWin();
    } else {
      $player = 'X';
      checkWin();
    }
  })

  function checkWin() {
    if (
      $('[data-cell="0"]').text() === $player &&
      $('[data-cell="1"]').text() === $player &&
      $('[data-cell="2"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="3"]').text() === $player &&
      $('[data-cell="4"]').text() === $player &&
      $('[data-cell="5"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="6"]').text() === $player &&
      $('[data-cell="7"]').text() === $player &&
      $('[data-cell="8"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="0"]').text() === $player &&
      $('[data-cell="3"]').text() === $player &&
      $('[data-cell="6"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="1"]').text() === $player &&
      $('[data-cell="4"]').text() === $player &&
      $('[data-cell="7"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="2"]').text() === $player &&
      $('[data-cell="5"]').text() === $player &&
      $('[data-cell="8"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else if (
      $('[data-cell="0"]').text() === $player &&
      $('[data-cell="4"]').text() === $player &&
      $('[data-cell="8"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }
    else (
      $('[data-cell="2"]').text() === $player &&
      $('[data-cell="4"]').text() === $player &&
      $('[data-cell="6"]').text() === $player
    )
      {
        $('announce-winner').text($player 'is the winner!');
      }

    }
})
