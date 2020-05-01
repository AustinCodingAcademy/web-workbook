'use strict';

 $(document).ready(function() {
  let $block = null;


  $('[data-stack]').click(function() {
    let clickedon = $(this).children().last().data('block');
    console.log(clickedon);

    if ($block) {
    $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }


  // $('[data-block]').click(function() {
  //   if ($blockSize) {
  //     $(this).append($blockSize =);
  // }
  })
});
