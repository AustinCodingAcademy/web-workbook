'use strict';

$(document).ready(function() {
  //Main variables used for the game. Starts the game. Defines the Stacks, Blocks, and which Block you can move.//
  var gameOver = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  var $movableBlocks = $('[data-block]:last-child');
  $movableBlocks.addClass('movable');

//$blocks are draggable.  $stacks will only accept the last child a .//
  $blocks.draggable({
    revert: true
  });
  $stacks.droppable({
    accept: '.movable',
    drop : function(event, ui) {
      if (!gameover) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //This resets the $blocks onto their initial $stack//
          // $movableBlocks = $('[data-block]:last-child');
          $blocks.removeClass('movable');
          $movableBlocks.addClass('movable');
          $blocks.draggable({
            revert: true
          });

        }
      }
    }
  });




  });
