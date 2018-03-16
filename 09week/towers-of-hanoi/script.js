'use strict';

$(document).ready(function() {

  let $block = null

  $('[data-stack]').click(function() {

    if ($block) {
      let $lastBlock = $(this).children().last();
      if (!$lastBlock.length || $lastBlock.data('block') > $block.data('block')){

      $(this).append($block);
      $block = null;
      checkForWin();
      }
    } else {
      $block = $(this).children().last().detach()
    }
  })

    function checkForWin() {
      if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4)
      {
       $('#announce-game-won').text("You won!");
      }
}
});
