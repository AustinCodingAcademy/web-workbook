'use strict';
/*start after page load */
$(document).ready(function() {
  let $block = null;

  $('[data-stack]').click(function() {

    if ($block) {
      let $lastBlock = $(this).children().last();
      if (!$lastBlock.length || $lastBlock.data('block') > $block.data('block')){
         /*this tells the game to let your block stack if it is smaller than the piece below*/
        $(this).append($block);
        $block = null;
        checkForWin();
      }

    } else {
      /*if your piece is bigger than the one below, you can't stack it*/
      $block = $(this).children().last().detach();
    }
  })

  function checkForWin() {
    /*checks to see if stack has been rebuilt on different column*/
    if ($('[data-stack="3"]').children().length === 4) {
      alert('You Won!');
    }
    else if ($('[data-stack="2"]').children().length === 4) {
      alert('You Won!');
    }
  }

  $('#clear').on('click', function() {
    location.reload();
  });
})
