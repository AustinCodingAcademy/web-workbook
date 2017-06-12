'use strict';

$(document).ready(function() {


  var gameover = false; //boolean for ending the game
  var $stack = $('[data-stack]');
  var $block = $('[data-block]');

// lastBlock is a legalMove in the game.
  var lastBlock = $('[data-block]:last-child');
  lastBlock.addClass("legalMove");


// code states that all move will be reverted unless they meet the conditions to make the revert false
  $block.draggable({revert: true});

    $stack.droppable({
    accept: ".legalMove",
    drop: function(event, ui) {
      if (!gameover) {
        if (legalDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top':0,
            'left':0
          });
          lastBlock = $('[data-block]:last-child');
          $('[data-block]').removeClass("legalMove");
          lastBlock.addClass("legalMove");
          $block.draggable({
            revert: true
          });
          checkForWin();
        }
      } else {
        resetGame();
      }
    }
  });

// this function declares if the block is smaller than the block it will be on
// placed into an empty field
  function legalDrop($stacks, $blocks) {
    var $last_block = $stacks.children().last();
    if (parseInt($blocks.attr("data-block")) <
  parseInt($last_block.attr("data-block")) || $stacks.children().length === 0) {
    return true;
  } else {
    return false;
  }
  }
  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 5) {
      $('#announcement').html("You Won!");
      gameover = true;

    }
  }

  //reset needs original code to work with draggable after newly created element
    function resetGame() {
      $('[data-stack="1"]').html('<div data-block="125"></div><div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
      $('[data-stack="2"]').empty();
      $('[data-stack="3"]').empty();
      $('#announcement').empty();
      gameover = false;
      var $stack = $('[data-stack]');
      var $block = $('[data-block]');
      var lastBlock = $('[data-block]:last-child');
      lastBlock.addClass("legalMove");
      $block.draggable({revert: true});
      $stack.droppable({
      accept: ".legalMove",
      drop: function(event, ui) {
        if (!gameover) {
          if (legalDrop($(this), ui.draggable)) {
            ui.draggable.draggable('option', 'revert', false);
            $(this).append(ui.draggable.detach());
            ui.draggable.css({
              'top':0,
              'left':0
            });
            lastBlock = $('[data-block]:last-child');
            $('[data-block]').removeClass("legalMove");
            lastBlock.addClass("legalMove");
            $block.draggable({
              revert: true
            });
            checkForWin();
          }
        } else {
          resetGame();
        }
      }
    });
  }
$('#clear').click(resetGame);


});
