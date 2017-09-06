'use strict';

$(document).ready(function() {
  // Put app logic in here

  var playerTurn = ``;

  $('[data-cell]').on('click', function(){
    if (playerTurn % 2 === 0){
      $(this).text('X');
      //checkVictory('X');
    } else {
    //player 2's turn (O)
      $(this).text('O');
      //checkVictory('O');
    }
    playerTurn++;

  })
/*
  function checkVictory(){

   if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="1"]').text() === 'X' &&     $('[data-cell="2"]').text() === 'X');

    else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="1"]').text() === 'O' &&     $('[data-cell="2"]').text() === 'O');

    if ($('[data-cell="3"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="5"]').text() === 'X');

    else if ($('[data-cell="3"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="5"]').text() === 'O');

    if ($('[data-cell="6"]').text() === 'X' && $('[data-cell="7"]').text() === 'X' && $('[data-cell="8"]').text() === 'X');

    else if ($('[data-cell="6"]').text() === 'O' && $('[data-cell="7"]').text() === 'O' && $('[data-cell="8"]').text() === 'O');

    if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="3"]').text() === 'X' && $('[data-cell="6"]').text() === 'X');

    else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="3"]').text() === 'O' && $('[data-cell="6"]').text() === 'X');

    if ($('[data-cell="1"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="7"]').text() === 'X');

    else if ($('[data-cell="1"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="7"]').text() === 'X');

    if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X');

    else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="5"]').text() === 'O' && $('[data-cell="8"]').text() === 'O');

    if ($('[data-cell="0"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="8"]').text() === 'X');

    else if ($('[data-cell="0"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="8"]').text() === 'O');

    if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="6"]').text() === 'X');

    else if ($('[data-cell="2"]').text() === 'O' && $('[data-cell="4"]').text() === 'O' && $('[data-cell="6"]').text() === 'O');




    console.log(checkVictory);
  }
*/

});
