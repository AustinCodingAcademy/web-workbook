'use strict';

$(document).ready(function() {
  let $block = null;
  let $blockSize = null;

    $('[data-stack]').click(function() {
    if ($block) {
      var $currentBlockInRow = $(this).children().last()
      console.log('$currentBlockInRow :', $currentBlockInRow)
      if($blockSize > $currentBlockInRow){}
      $(this).append($block);
     $block = null;
    } else {
      $block = $(this).children().last().detach();
      $block.getAttribute('data-block').value
      console.log('$block.attr().val():', $block.attr('data-block'))
      $blockSize = parseInt($block.attr('data-block'))
      console.log('$blockSize', $blockSize);
    }

    // $( '[data-block]' ).draggable();
    // $( '[data-stack]' ).droppable({
    //   over: function () {
    //     $(this).css('background-color', 'pink')
    //   },
    //   out: function() {
    //     $(this).css('background-color', 'aliceblue')
    //   },
    // drop: function() {
    // alert( "dropped" );
    // }

  });
  });

//What we know
//Move one piece at a time
//can't put larger blocks on top of small blocks
//to win must move same order to other end of box
//3+columns
//every level goes up by one block
//blocks should be moveable to any column