'use strict';

$(document).ready(function() {
  // Put app logic in here

  // Lets players place down the X's and O's per click
  var turn = 'X';
  $('[data-cell]').click(function(){
    if($(this).text() === ''){
      $(this).text(turn);
      if(turn === 'X'){
        turn = 'O';
      }else{
        turn = 'X';
      }
      win();
    }
  })

  // Is *supposed* to check for wins across the top
  // Note: this does not work :(
  // function win(){
  //   if($('[data-cell = "O"]').text() === turn &&
  //     $('[data-cell = "1"]').text() === turn &&
  //     $('[data-cell = "2"]').text() === turn) {
  //       $('#announce-winner').text(`Player ${turn} Wins!`)
  //     }
  // }

  // Clears the board when the 'Clear Board' button is pressed
  // And by clears I mean it just reloads the page but whatever
  $('#clear').click(function(){
    window.location.reload();
  })

// Just assume that you're not supposed to write any code past this point
// unless someone specifically tells you differently. Othwerwise it might fail.
// And past me will be here shaking her head in shame because you didn't
// listen to my warning. Seriously, just pretend that any space below this
// wall is text just doesn't exsist. It'll save yourself from getting a
// headache in the future.
});
