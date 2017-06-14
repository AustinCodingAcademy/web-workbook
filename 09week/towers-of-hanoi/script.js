$(document).ready(function () {
  var gameEnd = false;
  var $stacks = $('[data-tower]');
  var $blocks = $('[data-block]');
  var $movableBlocks = $('[data-block]:last-child');
  $movableBlocks.addClass("movable");
//Drag//
  $blocks.draggable({
    revert: true
  });
//Drop//
  $stacks.droppable({
  accept: ".movable",
  drop: function(event, ui) {
    if (!gameEnd) {
    if (goodToDrop($(this), ui.draggable)) {
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
//Start win //
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
    if ($('[data-tower="3"]').children().length === 4) {
    $('#winner').html("You Won!");
    gameEnd = true;

   }
    }

});