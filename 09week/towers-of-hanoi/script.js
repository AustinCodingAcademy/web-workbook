'use strict';

  $(document).ready(function() {
  var $block = null;

  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
    if  ($(this).children().length === 0 ||
    parseInt($block.attr('data-block')) <
    parseInt($(this).children().last().attr('data-block')));
      $(this).append($block);
      $block = null;
    } else {
      alert("You can't palce that block there!");
    }

    this.attr('data-stack') ==='3' && (this).children().length === 4){
      $( '#announce-game-won').text = "You won!";
    }
  })
});
