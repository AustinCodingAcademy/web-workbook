'use strict';

$(document).ready(function() {
  // Put app logic here
  // set variable as block placeholder
  var $block = null;

  $('[data-stack]').click(function() {
    // if block is null, pull it off the stack and save it
    if (!$block) {
      $block = $(this).children().last().detach();

    // otherwise, it's already saved in the block variable
    // so we check for legal moves, that is, larger sized
    // blocks or an empty stack, before placing the saved block
    } else {

      if ($(this).children().length === 0 ||  // empty stack
      parseInt($block.attr('data-block')) <   // the size of the saved block
      parseInt($(this).children().last().attr('data-block'))) {  // the size of the last block on the stack
        // legal move verified, so add the block to the stack
        $(this).append($block);
        // reset the placeholder block to null for next turn
        $block = null;

      } else {
        // not a legal move, inform the user
        alert("You can't place that block there!");
      }
    }
    // check for winning move, which is, all 4 blocks are on the 3rd stack
    if($(this).attr('data-stack')==='3' && $(this).children().length === 4){
      // put text in the correct area of the screen
      // this is a **correction** from class ... what I had
      // previously below was incorrect syntax!!
      // $('#announce-game-won').text = ('You Won!');
      $('#announce-game-won').text('You Won!');
    }
  })


});
