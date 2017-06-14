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
      }
    }
  }); // droppable ending

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
} // legalDrop ending
  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 5) {
      $('#announcement').html("You Won!");
      gameover = true;

    }
  } // check for win ending

  //reset and moves all elements to original starting position
    function resetGame() {
      $('[data-block="125"]').appendTo($('[data-stack="1"]'));
      $('[data-block="100"]').appendTo($('[data-stack="1"]'));
      $('[data-block="75"]').appendTo($('[data-stack="1"]'));
      $('[data-block="50"]').appendTo($('[data-stack="1"]'));
      $('[data-block="25"]').appendTo($('[data-stack="1"]'));
      $('#announcement').empty();
      gameover = false;
    }
$('#clear').click(resetGame);
}); //document ready ending
