'use strict';
//what we know
//*move one piece at a time
//* to win move all items in same order to last column
//* 3 columns
//* start with 3 block
//* every level goes up one block
//* blocks can move any where

$(document).ready(function() {
  // Put app logic here
  let $block = null;
  
  $('[data-stack]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })

});
