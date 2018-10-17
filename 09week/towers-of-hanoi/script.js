'use strict';
// what we know
// move one piece at a time
// can't put larger blocks on top of smaller blocks
// to wim, move all blocks in order to last column
// 3 columns
// start with 3 blocks
// every level goes up by one block
$(document).ready(function() {
  let $block = null;
  let $blockSize = null;
  let $currentBlockInRow = null;

  $('[data-stack]').click(function() {

    if ($block) {

      var $currentBlockInRow =$(this).children().last();
      console.log("$currentBlockInRow", $currentBlockInRow.attr('data-block'));
      
      if ($(this)children().length()!=0){

      $(this).append($block);

    } else {

      $block = $(this).children().last().detach();

      var $blockSize = parseInt($block.attr('data-block'))
    }

  })
})

  // Put app logic here

