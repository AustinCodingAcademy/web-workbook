'use strict';
//what we know
//move one piece at a time
//cant put large blocks on top of small blocks
//to win move all items in same order to last column
//3 columns
//start with 3 blocks
//every level goes up one block
//blocks should be moveable
$(document).ready(function() {
  
  let $block = null;
  let $blockSize=null
  $('[data-stack]').click(function() {
    console.log('$block = ', $block)
    if ($block) {
      var $currentBlockInRow =(this).children().last()
      console.log("currentBlockInRow", $currentBlockInRow)
     if($blockSize > $currentBlockInRow){}
     //appends block to row
      $(this).append($block);
      //sets $block as null so you can start again
      $block = null;
    } else {
      //grabs last child block and detaches but saves
      $block = $(this).children().last().detach();

      //retrieves value of attribute
      console.log('$block.attr().val():', $block.attr('data-block'))
      var $blockSize = parseInt($block.attr('data-block'))
      console.log('$blockSize: ', $blockSize)
      //convert String to number
    }
  })
})
