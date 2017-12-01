'use strict';

$(document).ready(function() {

  let turn = 'x';
  $('[data-cell]').click(function() {
    if ($(this).text() === '') {
      $(this).text(turn);
      checkWin();
      checkTie();
      if (turn === 'x') {
        turn = 'o';
      } else {
        turn = 'x';
      }


    }
  });

  function clear() {
    $('[data-cell]').empty()
    $('#announce-winner').empty()
    turn = 'x'
  }

  $('#clear').click(clear);



  function checkWin() {
    if (($('[data-cell=1]').text() === turn && $('[data-cell=4]').text() === turn && $('[data-cell=7]').text() === turn)
    || ($('[data-cell=2]').text() === turn && $('[data-cell=5]').text() === turn && $('[data-cell=8]').text() === turn)
    || ($('[data-cell=0]').text() === turn && $('[data-cell=4]').text() === turn && $('[data-cell=8]').text() === turn)
    || ($('[data-cell=6]').text() === turn && $('[data-cell=4]').text() === turn && $('[data-cell=2]').text() === turn)
    || ($('[data-cell=0]').text() === turn && $('[data-cell=1]').text() === turn && $('[data-cell=2]').text() === turn)
    || ($('[data-cell=3]').text() === turn && $('[data-cell=4]').text() === turn && $('[data-cell=5]').text() === turn)
    || ($('[data-cell=6]').text() === turn && $('[data-cell=7]').text() === turn && $('[data-cell=8]').text() === turn)
    || ($('[data-cell=0]').text() === turn && $('[data-cell=3]').text() === turn && $('[data-cell=6]').text() === turn)) {
    }

    $('#announce-winner').text(`player ${turn} wins`)

  }

  function checkTie() {
    let tie = true
    $('[data-cell]').each(function(){
      if ($(this).text() == '') {
        tie = false
      }
    })

    if (tie) {
      $('#announce-winner').text(`tie`)
    }
  }





});
