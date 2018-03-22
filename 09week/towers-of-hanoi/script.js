'use strict';

$(document).ready(function() {

// ====================================
//    Game Logic
// ====================================
  let $block = null;
  $('[data-stack]').click(function() {
    if ($block) {
      let $lastBlock = $(this).children().last();
      if (!$lastBlock.length || $lastBlock.data('block') > $block.data('block')) {
        $(this).append($block);
        $block = null;
        win();
      }
    } else {
      $block = $(this).children().last().detach()
    }
  })
// ====================================
//    Win Condition
// ====================================
  function win() {
    if ($('#tower2').children().length === 4 || $('#tower3').children().length === 4)
      $('#announce-game-won').text('Winner');
  }
});

// Board*
// Rings*
// Ring movement*
// Cant place big rings on small
// Win condition, if length = 4*
// Reset game


// 'use strict';
//
// $(document).ready(function() {
//   // Put app logic here
  // let $block = null,
  //     $tower2 = ('[data-stack="2"]'),
  //     $tower3 = ('[data-stack="3"]');
  // $('[data-stack]').click(function() {
  //   if ($block) {
  //     let $lastBlock = $(this).children().last();
  //     if (!$lastBlock.length || $lastBlock.data('block') > $block.data('block')) {
  //       $(this).append($block);
  //       $block = null;
  //       win();
  //     }
  //   } else {
  //     $block = $(this).children().last().detach()
  //   }
  // })
//
  // function win() {
  //   if ($(`[data-stack]="2"`).children().length === 4 || $(`[data-stack]="3"`).children().length === 4)
  //    $('#announce-game-won').text('Winner');
  // }
// });
