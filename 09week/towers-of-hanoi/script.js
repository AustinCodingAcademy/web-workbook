'use strict';

$(document).ready(function() {
  let $block = null;

  $('[data-stack]').click(function() {
      let clickedOn = $(this).children().last().data('block');
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
      console.log(clickedOn);
    }

  })
})
// $('[data-block]').click(function() {
//     let clickedTo = $(this).children().data('block');
//     console.log(clickedTo);
//   }
// )
