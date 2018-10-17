'use strict';

// what we know...
// ✔ can only move one piece at a time
// - can only put smaller blocks on larger blocks
// - must move all blocks to last column in same order
// - 3+ columns
// - start with 3 blocks, blocks++ each level

$(document).ready(function() {
  let $block = null;
  var $blockSize = null;
  
  $('[data-stack]').click(function() {
    if ($block) {
      var $prevBlock = $(this).children().last();
      var $prevBlockSize = parseInt($prevBlock.attr("data-block"));
      console.log("$prevBlockSize: ", $prevBlockSize);
      if($prevBlockSize != null && $prevBlockSize < $blockSize) {
        console.log($prevBlockSize, "<", $blockSize);
      } else {
        $(this).append($block);
      }
      $block = null;
      $blockSize = null;
    } else {
      $block = $(this).children().last().detach();
      $blockSize = parseInt($block.attr("data-block"));
      console.log("$blockSize: ", $blockSize)
    }
  })
})
