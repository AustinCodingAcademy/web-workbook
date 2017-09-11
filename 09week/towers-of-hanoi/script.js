'use strict';

$(document).ready(function() {

  var gameOver = false;
  var $stacks = $('.pole');
  var $blocks = $('.block');
  //last-child is the top block in stack, since only last child of every stack is allowed to make the move, add a class "movable" for $topBlocks.
  var $topBlocks = $('.block:last-child');
  $topBlocks.addClass("movable");

  //All the blocks are draggable, but they will go back to the original position unless condition that allows only the top block can be movable is met.
  $blocks.draggable({
    revert: true
  });
  //All stacks are droppable, but blocks will go back to the original position unless condition that allows only the top block can be movable is met.
  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      //Use comparison operator for inequality to determine if game over.
      if (!gameOver) {

        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          // css"position:'top:0 & 'left:0''" allows ui.draggable.css({‘top’: 0, ‘left’: 0}) will apply css styling to ensure the accepted block to sit in correct position in destination stack; or top of larger block if stack is occupied.
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //".removeClass("movable");" does not allow a block to be moved if another block is sitting on the top of it.//reset things
          $topBlocks = $('.block:last-child');
          $('.block').removeClass("movable");

          //.addClass("movable") allows block to be movable once block on top is relocated.
          $topBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });
          //check for Win
          checkWin();
        }
      }
    }
  });

  function goodToDrop($stack, $blocks) {
    var $last_block = $stack.children().last();
    if (parseInt($blocks.css("width")) < parseInt($last_block.css("width")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //When all blocks are stacked in "<div data-stack="3">" div call a function "winChecker" to sthe game over. check if the last move has won the game by calling winChecker() function.
  function checkWin() {
    if ($('#pole3').children().length === 5) {
      $('#gotIt').html("You Got It!");
      gameOver = true;

    }
  }
  //reset game by calling "data-stack=2" & "data-stack=3" with a class '.empty'. All 'data-block' s will be passed into 'data-stack=1'.

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    gameover = true;
  }
});
