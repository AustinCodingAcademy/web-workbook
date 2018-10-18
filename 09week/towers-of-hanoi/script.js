/* 'use strict';
// what we know
// * move one piece at a time
// * can't put large blocks on top of small blocks
// * to win, move all items in same order to last column
//* 3+ columns 
// * start with three blocks
// * every level it goes up one block
// * blocks should be moveable to any column

$(document).ready(function() {
  // Put app logic here

  let $block = null;
  let $blockSize = null;

// drag n drop
/*  $( function() {
    $( '[data-block]' ).draggable();
    $( '[data-stack]' ).droppable({
      over: function() {
        $(this).css('background-color', 'pink');
      },
      out: function() {
        $(this).css('background-color', 'aliceblue');
      },
      drop: function() {
        alert( 'dropped' );
      }
    });
  });
}); */

// click in click
/*  $('[data-stack]').click(function() {
    console.log('$block = ', $block);
    if ($block) {
      var $currentBlockInRow = $(this).children().last();
      // var $currentSize = parseInt($block.attr('data-block'));
      // console.log('$currentSize: ', $currentSize);
      console.log('$currentBlockInRow:', $currentBlockInRow);
      if($blockSize > $currentBlockInRow){
      }
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
      console.log('$block.attr().val():', $block.attr('data-block'));
      var $blocksize = parseInt($block.attr('data-block'));
      console.log('$blockSize: ', $blockSize);
      console.log('dropped in column' + $(this).attr('data-stack'));

    }
  })



}); */

'use strict';



$(function() {
//since only first child of every stack is allowed to make the move, give them class movable
  const gameover = false;
  const $stacks = $('[data-stack]');
  const $blocks = $('[data-block]');
  const $movableBlocks = $('[data-block]:first-child');
  $movableBlocks.addClass("movable");
  $( function() {
    $blocks.draggable();
    $stacks.droppable({
      over: function() {
        $(this).css('background-color', 'pink');
      },
      out: function() {
        $(this).css('background-color', 'aliceblue');
      },
    });
  });
  //any block is draggable, but they revert to original position unless condition is met
  $blocks.draggable({
    create: function() {
      if ($(this).is(':not(:first-child)')) {
        $(this).draggable('disable') 
      }
    }, 
    stop: function() { //make only first child draggable
      $('[data-block]:first-child').draggable('enable')
      $('[data-block]:not(:first-child)').draggable('disable')
    }
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameover) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          $stacks.css('background-color', 'aliceblue');
          console.log('dropped in column ' + $(this).attr('data-stack'));
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //reset things
          $movableBlocks = $('[data-block]:first-child');
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
    const $first_block = $stack.children().first();
    if (parseInt($block.attr("data-block")) <= parseInt($first_block.attr("data-block")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').html("We Got A Winner!!!");
      gameover = true;

    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="25"></div><div data-block="50"></div><div data-block="75"></div><div data-block="100"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    gameover = false;
  }

});

