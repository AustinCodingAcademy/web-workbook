'use strict';

$(document).ready(function() {
  var $block = null;
  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
      // console.log($block.attr("data-block"),$(this).children().last().attr("data-block"))
      if(Number(($block.attr("data-block")))>Number($(this).children().last().attr("data-block"))) {
        alert("BAD MOVE");
      } else {
      $(this).append($block);
      $block = null;
      console.log($("#winner").children().length);
    }
    }
    endgame();
  })
  //win condition
  function endgame() {
    if ($("#winner").children().length==4) {
    setTimeout(function(){ alert("You win!"); location.reload(); }, 250);
    }
  }
})
