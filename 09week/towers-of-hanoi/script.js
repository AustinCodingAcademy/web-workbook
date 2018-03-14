'use strict';

$(function() {
  let $block = null;

  $('[data-stack]').click(function() {
    if ($block) {
      if (!($(this).html().trim()) || $(this).children().last().attr('data-block') > $block.attr('data-block')) {
        $(this).append($block);
        $block = null;
      }
    } else {
      $block = $(this).children().last().detach();
    }
    if ($(this).children().length === 4 && $(this).attr('data-stack') !== '1') {
      $('#announce-game-won').html("<h1>You win!</h1>");
    }
  });
});
