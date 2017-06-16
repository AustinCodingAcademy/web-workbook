'use strict';

// This variable accomplishes 2 goals: stores the blocks and determines the states
var blockElement = undefined;

// Returns last element
// If element does not exists, returns undefined
function getLastElement($el) {
  //find a dataBlock
  var $dataBlock = $el.find('div[data-block]');
  //is dataBlock present
  if ($dataBlock.length > 0) {
    //find the last and remove from DOM and store into blockElement
    return $dataBlock.last();
  }
  return undefined;
}

function getElementSize($el) {
  // Getting the value of a data-block (convert to integer)
  var dataBlockValue = parseInt($el.attr('data-block'));
  // Safety check to determine valid numbers
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
  if (isDataStackSizeEmpty(1) && isDataStackSizeEmpty(2)) {
    $('#announce-game-won').text('You\'ve won!');
  }
}

function pop($el) {
  // Find the last dataBlock
  var $dataBlock = getLastElement($el);
  //is dataBlock present
  if ($dataBlock) {
    //find the last and remove from DOM and store into blockElement
    blockElement = $dataBlock.detach();
  }
}

function push($el) {
  //identify last element
  var $dataBlock = getLastElement($el);

  if ($dataBlock) {
    // Getting the value of a data-block (convert to integer)
    var dataBlockValue = getElementSize($dataBlock);
    var blockElementValue = getElementSize(blockElement);
    if (blockElementValue > dataBlockValue) {
      return;
    }
  }

  //add back into DOM, specifically into a stack
  $el.append(blockElement);
  //resetting the blockElement
  blockElement = undefined;
  checkIfWon();
}

function main() {
  // find all the stacks
  $('div[data-stack]').each(function() {
    var $stack = $(this);
    $stack.click(function() {
      //Determine if undefined
      if (blockElement) {
        // this is the push state
        push($stack);
      } else {
        // this is the pop state
        pop($stack);
      }
    });
  });
}

$(document).ready(function() {
  main();
});

// 4 rings
// 3 poles
// move all the rings from pole 1 to pole 3
// bigger rings cannot be placed on top of smaller rings
// clickable
// Select
// place
