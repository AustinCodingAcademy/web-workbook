'use strict';

$(document).ready(function() {
  var $block = null; // detach block and set it//

    $('[data-stack]').click(function() {
      if (!$block) {
        $block = $(this).children().last().detach();
      } else {
        //size of last one//
      if ($(this).children().length === 0 ||
        parseInt($block.attr('datablock')) <
        parseInt($(this).children().last().attr('data-block'))) {
        $(this).append($block);
        $block = null;// reset ready to try again since you set it//
      } else {
        alert("You can't place that block there!");
      }
    }
    if ($(this).attr('data-stack')==='3' && $(this).children().length === 4){
      $('#announce-game-won').innerHTML = "You won!";
    }
})
});
