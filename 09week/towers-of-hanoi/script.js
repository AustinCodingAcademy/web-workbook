'use strict';

$(document).ready(function() {
   var $block = null;
   $('[data-stack]').click(function() {
     if ($block) {
      let $lastBlock = $(this).children().last();
       if  (!$lastblock.length  || $(block.data('block') < $lastBlock.data)
       $(this).append($block);
       $block = null;
       checkWin();
     } else {
       $block = $(this).children().last().detach();
     }
   });

   function checkWin() {
     if ($('[data-stack="2"]').children().length() === 4 || ($'[data-stack="3"]'))
     $('announce-game-won').text('You Won!');
   }

});
