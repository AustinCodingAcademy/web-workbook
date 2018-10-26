'use strict';

// what we know
// * move one piece at a time
// * can't put large blocks on top of small blocks
// * to win, move all items in same order to last column
// * 3+ columns
// * start with 3 blocks
// * every level goes up one block



$(document).ready(function() {

  let $block = null;
  let $blockSize = null;
  
  $('[data-stack]').click(function() {
    console.log('$block = ', $block)
    if ($block) {
      // appends block to row
      $(this).append($block);
      // sets $block as null so you can start again
      $block = null;
    } else {
      //grabs last child block and detaches but saves
      $block = $(this).children().last().detach();
      $blockSize = $block.attr('data-block')
      console.log('$blockSize', $blockSize)
  
  
  
    }
   });
})




// $(document).ready(function() {
  // let $block = null;
//   $( '[data-block]' ).draggable();
//   $( '[data-stack]' ).droppable({
//     over: function () {
//       $(this).css('background-color', 'pink')
//     },
//     out: function() {
//      $(this).css('background-color', 'aliceblue')
//     drop: function() {
//       alert( "dropped" );

//     }
//  });












// });