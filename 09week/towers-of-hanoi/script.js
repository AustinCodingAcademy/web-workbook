'use strict';

$(document).ready(function() {
  // Put app logic here
  //setting all the blocks to null
  let $block = $('div[data-block]');
  $block = null;
  let blockData = $('[data-block]:lt(4)');
  let allBlocks = blockData.children;
  console.log(allBlocks.length);

  $('[data-stack]').click(function moveBlocks() {
    let moveableBlock = $('[data-block]').children().last().data(blockData);
    // console.log(moveableBlock)
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })


  // function moveInOrder() {
  //   if () {
  //
  //   }
  // }
});
