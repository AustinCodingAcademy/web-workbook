'use strict';
$(document).ready(function() {

  //set vars
  var gameover = false;
  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  //last-child is the top block in stack, since only last child of every stack is allowed to make the move, add a class "movable" for $topBlocks.
  var $topBlocks = $('[data-block]:last-child');
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
      if (!gameover) {

        if (dropIt($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          // styling"position:relative" allows "data-block" to land block position left on data-stack/land on bottom of stack or top of larger block if stack is occupied.
          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
          //".removeClass("movable");" does not allow a block to be moved if another block is sitting on the top of it.
          $topBlocks = $('[data-block]:last-child');
          $('[data-block]').removeClass("movable");

          //.addClass("movable") allows block to be movable once block on top is relocated.
          $topBlocks.addClass("movable");
          $blocks.draggable({
            revert: true

          });
          winChecker();
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
  //When all blocks are stacked in "<div data-stack="3">" div call a function "winChecker" to sthe game over. check if the last move has won the game by calling winChecker() function.
  function winChecker() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("You got it!");
      gameover = true;

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
  //   $(function() {
  //  new Game().init();
  //  $("#startOver").click(function() {
  //   new Game().init();;
  //  });
  // });


});
