'use strict';
$(document).ready(function() {

  //set vars
  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  //last-child is the top block in stack, since only last child of every stack is allowed to make the move, add a class "movable"
  var $topBlocks = $('[data-block]:last-child');
  $topBlocks.addClass("movable");

  //All the blocks are draggable, but they will go back to the original position unless condition is met.
  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if(!gameover) {
        if (dropIt($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());

          $(ui.draggable).appendTo(this).attr('style', 'position: relative');

          $topBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");

          $topBlocks.addClass("movable");
          $blocks.draggable({
            revert: true

          });
          checkForWin();
        }
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
  //When all blocks are stacked in "<div data-stack="3">" div call a function "checkForWin" to sthe game over.
  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("You got it!");
      gameover = true;

    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    gameover = true;
  }

});
