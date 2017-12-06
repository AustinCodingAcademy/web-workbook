'use strict';

$(document).ready(function() {
  // Put app logic here
  const $top = $('[data-block=25]');
  const $midTop = $('[data-block=50]');
  const $midBottom = $('[data-block=75]');
  const $bottom = $('[data-block=100]');


  console.log($top, $midTop, $midBottom, $bottom);

  $('[data-stack]').click(function() {
  let $playerHand = null;
  let $currentStack;

    if ($playerHand === null && $(this).children().length > 0) {
      $currentStack = $(this).attr('data-stack')
      $playerHand = $(this).children().last().detach()
      
    }

  })


});
