'use strict';

$(function() {

  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');

  //Move last child
  var $movableBlocks = $('[data-block]:last-child');
  $movableBlocks.addClass("movable");

  //any block is draggable, but they never to original position unless condition is met
  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameover) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //reset things
          $movableBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");
          $movableBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });
          //checkForWin
          checkForWin();
        }
      } else {
        resetGame();
      }
    }
  });

  function goodToDrop($stack, $block) {
    var $last_block = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last_block.attr("data-block")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("You Won!");
      gameover = true;
    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    gameover = false;
  }

});
