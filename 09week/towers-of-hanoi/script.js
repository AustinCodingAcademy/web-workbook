$(document).ready(function() {
  let currentBlock = null;
  let playerHasWon = false;
  var playerMoves = 0;
  var stacks = $("[data-stack]");
  const blockTotal = getBlockTotal(stacks.first());
  const winnerText = $("#announce-game-won");


  stacks.click(function() {
    let currentStack = $(this);
    let blockCount = $(this).children().length;


    if (playerHasWon) return;


    if (currentBlock) {

      if (blockCount > 0) {
        var prevBlock = getPrevBlock(currentStack);
        var isValidMove = compareBlocks(prevBlock, currentBlock);

        if (isValidMove) {
          appendBlock(currentStack, currentBlock);
          playerMoves++;

          playerHasWon = checkForWin(stacks, blockTotal);
          if (playerHasWon) {
            let announcement = "You won in " + playerMoves + " moves!";
            winnerText.text(announcement);
            currentBlock = null;
            playerMoves = 0;
            return;
          }
        }
        else {
          return;
        }
      }

      else {
        appendBlock(currentStack, currentBlock);
        playerMoves++;
      }

      currentBlock = null;
    }

    else {
      currentBlock = removeBlock(currentStack);
    }
  });
});

function getBlockTotal(stack) {
  return stack.children().length;
}

function getPrevBlock(stack) {
  let prevBlock = stack.children().last();
  return prevBlock;
}

function appendBlock(stack, block) {
  stack.append(block);
  return stack;
}

function removeBlock(stack) {
  let block = stack
    .children()
    .last()
    .detach();
  return block;
}

function getBlockSize(block) {
  let blockSize = parseInt(block.attr("data-block"));
  return blockSize;
}

function compareBlocks(block1, block2) {
  if (getBlockSize(block1) > getBlockSize(block2)) {
    return true;
  } else {
    return false;
  }
}

function checkForWin(stacks, blockTotal) {
  let lastStack = stacks.last();
  let blockCount = lastStack.children().length;

  if (blockCount === blockTotal) {
    return true;
  } else {
    return false;
  }
}