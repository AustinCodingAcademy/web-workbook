'use strict';

$(document).ready(function() {
  // Put app logic in here

  moveBlock();
});


/* * If a user clicks on a data stack that contains [a] data block[s], it will select the data block in the last position
 * If a user clicks on an empty data stack, it will insert the previously selected data block into the data stack
 * If a user clicks on a data stack that already contains [a] data block[s],
 * If the selected data block is “more than” the data block in the last position, alert the user that they cannot move it
 * Else it will insert the selected data block in the last position
 * If a user is able to move all data blocks (in the correct position) into data stack 2 or 3
 * They win! Show them a win message
 * A user should be able to reset the board */

var selected = null;

function moveBlock() {
  $('div').click(function() {
      var currentStack = $(this);

      if (!(currentStack.children().length < 1)) {
        /*(currentStack.attr('data-stack'))*/
        var currentBlock = currentStack.children().last();
        console.log(currentBlock); // delete
        selected = currentBlock;
        console.log(selected); // delete
        // selected.remove();

        $('div').click(function(){
          var nextStack = $(this);
          selected.appendTo(nextStack);
          selected = null;
          console.log(selected);
        });

      } /* else {
        alert('no');
      } */

    });
  }
