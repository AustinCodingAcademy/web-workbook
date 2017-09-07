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
        drop: function(event, ui) {
          if (!gameOver) {
            if (dropReady($(this), ui.draggable)) {
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
              //Winner!!//
              winState();
            } else {
              newGame();
            }
          }
        }
      });

      //Variable that triggers a new game//
      function newGame() {
        $('[data-stack="1"]').html('<div data-stack="1"><div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div></div>');
        $('[data-stack="2"]').empty();
        $('[data-stack="3"}').empty();
        gameOver = false;
        }
      //Defines which blocks can be dropped into a stack.//
      function dropReady($stack, $block) {
        var $last_block = $stacks.children().last();
        if (paresInt($block.attr('data-block')) < paresInt($last-block.attr('data-block')) || $stacks.children().length === 0) {
          return true;
        }  else {
          return false}
        }
        //When someone wins, the win message is displayed and the game is ended.//
        function winState() {
          if ($('[data-stack="3"]').children().length === 4) {
            $('#announce-game-won').html('Winner, Winner. Chicken Dinner!!');
            gameOver = true;
        }
      }
      });
