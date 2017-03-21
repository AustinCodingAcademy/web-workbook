$(document).ready(function() {
  // set initial global variables
  let $block = null;
  let $blockSize = null;
  let $lastBlock = null;
  // START click functions
  $('[data-stack]').click(function() {
    $lastBlock = $(this).children().last().data('block');
    // nothing held, nothing in stack
    if (!$block && !$lastBlock) {
      $lastBlock = null;
      console.log('Invalid move: nothing to pick up');
    }
    // nothing held >> pick up last block
    else if (!$block) {
      $block = $(this).children().last().detach();
      $blockSize = $block.data('block');
      console.log(`${$blockSize} held`);
    }
    // check for last block size >> place block
    else if (!$lastBlock || $blockSize < $lastBlock) {
      $(this).append($block);
      console.log(`${$blockSize} placed`);
      $block = null;
      $blockSize = null;
      console.log('Nothing held');
    }
    // block held, bigger than last block
    else {
      console.log('Invalid move: block held larger than last block');
    }
  })
  // END click functions

});
