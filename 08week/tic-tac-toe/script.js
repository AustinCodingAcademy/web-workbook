'use strict';

var turn = 'X'

// Job 1, switching turns
  $(function(){
    $('[data-cell]').on('click', function(){
      if($(this).text() === ''){
        $(this).text(turn);
        wins();
          if(turn === 'X'){
          turn = 'O';
          }else{
          turn = 'X';
          }
        }
      })
    });
// Job 2, Win conditions
  var wins = function(){
    // Across the row win conditions)
      if($('[data-cell="0"]').text() === turn &&
          $('[data-cell="1"]').text() === turn &&
          $('[data-cell="2"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
      }else if($('[data-cell="3"]').text() === turn &&
          $('[data-cell="4"]').text() === turn &&
          $('[data-cell="5"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
      }else if($('[data-cell="6"]').text() === turn &&
          $('[data-cell="7"]').text() === turn &&
          $('[data-cell="8"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
    // Down the Column win conditions
      }else if($('[data-cell="0"]').text() === turn &&
          $('[data-cell="3"]').text() === turn &&
          $('[data-cell="6"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
      }else if($('[data-cell="1"]').text() === turn &&
          $('[data-cell="4"]').text() === turn &&
          $('[data-cell="7"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
      }else if($('[data-cell="2"]').text() === turn &&
          $('[data-cell="5"]').text() === turn &&
          $('[data-cell="9"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
    // Across Win Conditions
      }else if($('[data-cell="0"]').text() === turn &&
          $('[data-cell="4"]').text() === turn &&
          $('[data-cell="8"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
      }else if($('[data-cell="2"]').text() === turn &&
          $('[data-cell="4"]').text() === turn &&
          $('[data-cell="6"]').text() === turn){
        $('#announce-winner').text(`${turn} Wins!`);
    // cat scratch
      }else if($('[data-cell="0"]').text().length > 0 &&
          $('[data-cell="1"]').text().length > 0 &&
          $('[data-cell="2"]').text().length > 0 &&
          $('[data-cell="3"]').text().length > 0 &&
          $('[data-cell="4"]').text().length > 0 &&
          $('[data-cell="5"]').text().length > 0 &&
          $('[data-cell="6"]').text().length > 0 &&
          $('[data-cell="7"]').text().length > 0 &&
          $('[data-cell="8"]').text().length > 0){
        $('#announce-winner').text(`Tie`);
      }
    }
    $(function(){
      $('#clear').on('click', function(){
        $('[data-cell]').text('');
        $('#announce-winner').text('');
      })
    })
