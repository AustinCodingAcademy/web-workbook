'use strict';

$(document).ready(function() {
  // Put app logic here
  var $blocks = $('[data-block]');
  var $stacks = $('[data-stack]');
  var $moveBlocks = $('[data-block]:last-child');
  $moveBlocks.addClass("moveable");
  var gameover = false;

  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".moveable",
    drop: function(event, ui) {
      if(!gameover) {
        if(dropBlock($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          $moveBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("moveable");
          $moveBlocks.addClass("moveable");
          $blocks.draggable({
            revert: true
          });
          checkForWin();
        }
      }
    }
  });
  function dropBlock($stack, $block) {
    var $last_block = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last_block.attr("data-block")) ||
  $stack.children().length === 0) {
    return true;
  } else {
    return false;
  }
}
  function checkForWin() {
    if($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("Nice job, you win!");
      gameover = true;
    }
  }
});
