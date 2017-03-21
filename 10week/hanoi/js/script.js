$(document).ready(function() {

  // set initial global variables
  let $block = null;
  let $blockSize = null;
  // START click functions
  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
      $blockSize = $block.data('block');
      console.log(`${$blockSize} held`);
    } else {
      if ($blockSize < $(this).children().last().data('block') ||
          $(this).children().length === 0) {
            $(this).append($block);
            $block = null;
            console.log('Nothing held');
      }
    }
  })
  // END click functions

});
