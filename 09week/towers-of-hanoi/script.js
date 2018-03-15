'use strict';

$(document).ready(function() {
  let $block = null;

  // $('[data-stack]').click(function() {
  //   if ($block) {
  //     $(this).append($block);
  //     $block = null;
  //   } else {
  //     $block = $(this).children().last().detach();
  //   }

  $('[data-stack]').click(function() {

    if ($block) {
      let $lastBlock = $(this).children().last();
      if (!$lastBlock.length|| $lastBlock.data('block') > 

      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }


    function checkForWin() {
      if ($)
       $('announce-game-won').text("You won!")

    }


    $( "[data0stack]").sortable(}
      connectWith

  })
})
