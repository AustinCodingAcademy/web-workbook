'use strict';

$(document).ready(function() {

  var gameOver = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  var $movableBlocks = $('[data-block]:last-child');
  $movableBlocks.addClass("movable");

  $blocks.draggable({
    revert: true
  });
  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameOver) {
        if (dropReady($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });


          $movableBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");
          $movableBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });

          winState();
        }
      } else {
        newGame();
      }
    }
  });

  function newGame() {
    $('[data-stack="1"]').html('<div data-stack="1"><div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('announce-game-won').empty();
    gameOver = false;
  }


  function dropReady($stack, $block) {
    var $last_block = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last_block.attr("data-block")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }


  function winState() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html('We got a Winner!').css('background-color', 'red');
      gameOver = true;
    }
  }
});
