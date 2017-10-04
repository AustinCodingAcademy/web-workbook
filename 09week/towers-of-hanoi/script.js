'use strict';

$(function(){

  var $stacks = $('[data-stack]');
  var $detached = {};
  var gameover = false;

  $stacks.click(move);

  //First check if detached block is empty, if true, detach the last-child of the clicked stack;
  //If yes, try dropping.
  function move() {
    if (gameover === false) {
      if ($.isEmptyObject($detached)) {
        // if current stack is not empty, detach the last-child of current stack
        if(!($(this).children().length ===0) ) {
          $detached=$(this).children().last().detach();
        }
      }
      else {
        if (dropDetached($(this), $detached)) {
          $detached = {};
        }
      }
      checkForWin();
    }
    else {
      resetGame();
    }
  }

  function dropDetached($stack, $detached) {
    //if droppable, drop detached
    //if not, do nothing, return
    if (droppable($stack, $detached)) {
      $stack.append($detached);
      return true;
    }
    else {
      return false;
    }
  }

  function droppable($stack, $detached) {
    var $last_block = $stack.children().last();
    if( parseInt($detached.attr("data-block"))<parseInt($last_block.attr("data-block")) || $stack.children().length===0) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkForWin() {
    if($('[data-stack="3"]').children().length===4) {
      $('#announce-game-won').html("You Won!");
      gameover=true;

    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    $detached = {};
    gameover = false;
  }

});
