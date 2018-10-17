"use strict";

// to do...
// ✔ can only move one piece at a time
// ✔ can only put smaller blocks on larger blocks
// - check for win

$(document).ready(function() {
  let currentBlock = null;

  $("[data-stack]").click(function() {
    let blockCount = $(this).children().length;

    // if we have a block, look to append it
    if (currentBlock) {
      // if row is not empty ensure valid move
      if (blockCount > 0) {
        var prevBlock = getPrevBlock($(this));
        var isValidMove = compareBlocks(prevBlock, currentBlock);

        // valid move
        if (isValidMove) {
          appendBlock($(this), currentBlock);
        }
        // invalid move
        else {
          console.log("Invalid Move!");
          return;
        }
      }

      // otherwise, row is empty so just append cuurentBlock
      else {
        appendBlock($(this), currentBlock);
      }

      // reset currentBlock to null once we have appended it
      currentBlock = null;
    }

    // otherwise, we do not have a block so get one
    else {
      currentBlock = removeBlock($(this));
    }
  });
});

/**
 * Function: getPrevBlock()
 * Description:
 */
function getPrevBlock(stack) {
  let prevBlock = stack.children().last();
  return prevBlock;
}

/**
 * Function: appendBlock()
 * Description:
 */
function appendBlock(stack, block) {
  stack.append(block);
  return stack;
}

/**
 * Function: removeBlock()
 * Description:
 */
function removeBlock(stack) {
  let block = stack
    .children()
    .last()
    .detach();
  return block;
}

/**
 * Function: getPrevBlockSize()
 * Description:
 */
function getBlockSize(block) {
  let blockSize = parseInt(block.attr("data-block"));
  return blockSize;
}

/**
 * Function: compareBlocks()
 * Description:
 */
function compareBlocks(block1, block2) {
  if (getBlockSize(block1) > getBlockSize(block2)) {
    return true;
  } else {
    return false;
  }
}
