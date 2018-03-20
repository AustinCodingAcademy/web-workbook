'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;
  var $prevstack = null;

  $(document).ready(function() {
    var $block = null;

    $('[data-stack]').click(function() {
      if ($block) {
        console.log($block.attr('data-block'));
        // console.log($(this).children().last());
        // Check if the stack is empty or if the block is less than the last one
        if ($(this).children().length === 0 || $block.attr('data-block') < $(this).children().last().attr('data-block')) {
          $(this).append($block);
          $block = null;
          // Check if the stack has 4 blocks and the blocks are on a differnt stack other than stack1 to win
          if ($(this).children().length === 4 && $(this).attr('data-stack') !== '1') {
            console.log('You Win!!');
          }
        } else { // to place the block into the previous stack back
          $prevstack.append($block);
          // $block = null;
        }
      } else {
        $prevstack = $(this); // to remember the stack where the block is picked
        $block = $(this).children().last().detach();
      }
    })
  })
});
