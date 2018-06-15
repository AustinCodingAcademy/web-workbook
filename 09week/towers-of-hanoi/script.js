'use strict';

$(document).ready(function() {
  // Put app logic here
  //setting all the blocks to null
  let $block = $('div[data-block]');
  $block = null;
  let blockData = $('[data-block]:lt(4)');
  // console.log(blockData);
  // var yellow = $('[data-block="100"]');
  // var red = $('[data-block="75"]');
  // var green = $('[data-block="50"]');
  // var blue = $('[data-block="25"]');
  // console.log(blockData);
  // console.log($block.childNodes);

  $('[data-stack]').click(function(e) {
    let clickedOn = $('[data-block]').children().last().data('block');
    console.log(clickedOn);
    // let nextBlock = $('[data-stack]').;
    // console.log(nextBlock);
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })

  // function moveInOrder() {
  //   if (blockData.data('block').lastChild > blockData.data('block').previousSibling) {
  //
  //   }
  // }
});
