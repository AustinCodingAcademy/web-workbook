$(function() {
  let player = 'X';

  $('[data-cell]').click(function() {
    $(this).text(player);
    if(checkWin()) {
      $('#announce-winner').text(`${player} wins!`)
    } else {
      if (player === 'X') {
        player = 'O';
      }else {
        player = 'X';
      }
    }

  })

  function checkWin() {
    if (
      $('[data-cell="0"]').text() === 'X' &&
      $('[data-cell="3"]').text() === 'X' &&
      $('[data-cell="6"]').text() === 'X' ||
      $('[data-cell="0"]').text() === 'O' &&
      $('[data-cell="3"]').text() === 'O' &&
      $('[data-cell="6"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="0"]').text() === 'X' &&
      $('[data-cell="4"]').text() === 'X' &&
      $('[data-cell="8"]').text() === 'X' ||
      $('[data-cell="0"]').text() === 'O' &&
      $('[data-cell="4"]').text() === 'O' &&
      $('[data-cell="8"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="0"]').text() === 'X' &&
      $('[data-cell="1"]').text() === 'X' &&
      $('[data-cell="2"]').text() === 'X' ||
      $('[data-cell="0"]').text() === 'O' &&
      $('[data-cell="1"]').text() === 'O' &&
      $('[data-cell="2"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="1"]').text() === 'X' &&
      $('[data-cell="4"]').text() === 'X' &&
      $('[data-cell="7"]').text() === 'X' ||
      $('[data-cell="1"]').text() === 'O' &&
      $('[data-cell="4"]').text() === 'O' &&
      $('[data-cell="7"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="2"]').text() === 'X' &&
      $('[data-cell="4"]').text() === 'X' &&
      $('[data-cell="6"]').text() === 'X' ||
      $('[data-cell="2"]').text() === 'O' &&
      $('[data-cell="4"]').text() === 'O' &&
      $('[data-cell="6"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="2"]').text() === 'X' &&
      $('[data-cell="5"]').text() === 'X' &&
      $('[data-cell="8"]').text() === 'X' ||
      $('[data-cell="2"]').text() === 'O' &&
      $('[data-cell="5"]').text() === 'O' &&
      $('[data-cell="8"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="3"]').text() === 'X' &&
      $('[data-cell="4"]').text() === 'X' &&
      $('[data-cell="5"]').text() === 'X' ||
      $('[data-cell="3"]').text() === 'O' &&
      $('[data-cell="4"]').text() === 'O' &&
      $('[data-cell="5"]').text() === 'O'
    ) {
      return true;
    } else if(
      $('[data-cell="6"]').text() === 'X' &&
      $('[data-cell="7"]').text() === 'X' &&
      $('[data-cell="8"]').text() === 'X' ||
      $('[data-cell="6"]').text() === 'O' &&
      $('[data-cell="7"]').text() === 'O' &&
      $('[data-cell="8"]').text() === 'O'
    ) {
      return true;
    }else {
      return false;
    }
  }
})
