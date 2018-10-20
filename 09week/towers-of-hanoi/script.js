"use strict";
// what we know
// move one piece at a time
// can't put larger blocks on top of smaller blocks
// to wim, move all blocks in order to last column
// 3 columns
// start with 3 blocks
// every level goes up by one block
$(document).ready(function () {
  let currentBlock = null;
  let blockSize = null;
  let prevBlock = null;

  $("[data-stack]").click(function () {
    let blockCount = $(this).children().length;
    console.log(blockCount);
    // If we have a currentBlock attached to cursor 
    if (currentBlock) {
      var prevBlock = $(this)
        .children()
        .last();
      // Empty stack
      if (blockCount === 0) {
        $(this).append(currentBlock);
      } else {
        // 
        let isValid = blockCompare(currentBlock, prevBlock);
        if (isValid) {
          $(this).append(currentBlock);
        } else {
          return;
        }
      }

      currentBlock = null;
      // we dont have a block selected
    } else {
      currentBlock = $(this)
        .children()
        .last()
        .detach();
    }
  });
});

function blockCompare(block1, block2) {
  // data value of block one > value of data value block2
  let block1Size = getBlockSize(block1);
  let block2Size = getBlockSize(block2);
  if (block1Size < block2Size) {
    return true;
  } else {
    return false;
  }
}

function getBlockSize(block1) {
  var blockSize = parseInt(block1.attr("data-block"));
  return blockSize;
}
// winning condition function
function winCond(blockCount) {
  if (blockCount === 3)
  console.log(blockCount)
  return true;
} els;>?L<0
e "}:L? BV