'use strict';

$(document).ready(function() {

  main();

  function getLastElement($el) {
    var $dataBlock = $el.find('div[data-block]');
    if ($dataBlock.length > 0) {
      return $dataBlock.last();
    }
    return undefined;
  }

  function getElementSize($el) {
    var dataBlockValue = parseInt($el.attr('data-block'));
    if (isNaN(dataBlockValue)) {
      throw "Invalid number";
    }
    return dataBlockValue;
  }

  function isDataStackSizeEmpty(i) {
    var $dataBlock = $("div[data-stack='" + i + "']").find('div[data-block]');
    return $dataBlock.length === 0;
  }

  function checkIfWon() {
    //if datastack1 and datastack2 are empty, then it's a winstate
    if (isDataStackSizeEmpty(1) && isDataStackSizeEmpty(2)) {
      $('#announce-game-won').text("You're a Winner!!!");
    }
  }

  function isMoveAllowed($stack, $block) {
    var $dataBlock = getLastElement($stack);
    if ($dataBlock) {
      var dataBlockValue = getElementSize($dataBlock);
      var blockElementValue = getElementSize($block);
      return blockElementValue < dataBlockValue;
    }
    return true;
  }

  function push($stack, $block) {
    $block.draggable('option', 'revert', false);
    //resetting position when dropping blocks
    $block.css({
      'top': 0,
      'left': 0
    });

    $stack.append($block.detach());
    // reset moveable blocks
    $('div[data-block]').removeClass('allowMove');
    $('div[data-block]:last-child').addClass('allowMove');
    //make block draggable again
    $block.draggable({
      revert: true
    });

    checkIfWon();
  }

  function clickClear() {
    //find all datastacks and empty them
    $('div[data-stack]').empty();
    var stack1 = $('div[data-stack="1"]');

    for (var i = 1; i <= 4; i++) {
      stack1.prepend('<div data-block="' + i + '"></div>');
    }
    //make blocks draggable again
    setBlockDraggable();
    $('#announce-game-won').text('');
  }

  function setStackDroppable() {
    // find all the stacks
    $('div[data-stack]').droppable({
      accept: '.allowMove',
      drop: function(event, ui) {
        var $stack = $(this);
        var $block = ui.draggable;
        if (isMoveAllowed($stack, $block)) {
          push($stack, ui.draggable);
        }
      }
    });
  }

  function setBlockDraggable() {
    //find last-child in datablock and allow move
    $('div[data-block]:last-child').addClass("allowMove");
    $('div[data-block]').draggable({
      revert: true
    });
  }

  function main() {
    setStackDroppable();
    setBlockDraggable();

    $('#clear').click(clickClear);
  }

});
