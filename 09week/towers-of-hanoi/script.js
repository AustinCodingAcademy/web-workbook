'use strict';
//What we know
//* move one piece at a time
//* can't put large blocks on top of small blocks
//* to win, move all items in same order t last column
//* 3+ columns
//* every level goes up one block
//* blocks should be moveable to any column

$(document).ready(function() {
  
  let $block = null;
  $( '[data-block]' ).draggable();
  $( '[data-stack]' ).droppable({
    over: function () {
      $(this).css('background-color', 'pink')
    },
    out: function () {
      $(this).css('background-color', 'lightblue')
    },
    /* drop: function() {
      alert("dropped" );
    } */
  });
   


  // Put app logic here
  /*let $block = null;
  
  $('[data-stack]').click(function() {
    console.log('$block = ', $block)
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
      console.log('$block.val():', $block.val())
      console.log('$block.attr():', $block.attr('data-block'))
    }
  })  */
  




}); 
