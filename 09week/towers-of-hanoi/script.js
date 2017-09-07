'use strict';
$(document).ready(function() {

  //set vars
  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  //last-child is the top block in stack, since only last child of every stack is allowed to make the move, add a class "movable"
  var $topBlocks = $('[data-block]:last-child');
  $topBlocks.addClass("movable");

  //All the blocks are draggable, but they will go back to the original position unless condition of only the top block can be movable is met.
  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      // if(!gameover) {
      if (dropIt($(this), ui.draggable)) {
        ui.draggable.draggable('option', 'revert', false);
        $(this).append(ui.draggable.detach());
        // styling allows "data-block" to land block position left on data-stack.
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');

        $topBlocks = $('[data-block]:last-child');
        $('[data-block]').removeClass("movable");

        $topBlocks.addClass("movable");
        $blocks.draggable({
          revert: true

        });
        winChecker();
      } else {
        resetGame();
      }
    }
  });

  function dropIt($stack, $block) {
    var $last_block = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last_block.attr("data-block")) || $stack.children().length === 0) {
      return true;

    } else {
      return false;
    }
  }
  //When all blocks are stacked in "<div data-stack="3">" div call a function "winChecker" to sthe game over.
  function winChecker() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("You got it!");
      gameover = true;

    }
  }


});
