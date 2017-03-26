$(document).ready(function() {

  let $block = null;

  $('[data-stack]').click(function() {
    let stack = this;
    if (!$block) {
      $block = $(stack).children().last().detach();
    } else if (isLegal(stack) || isEmpty(stack)){
      $(stack).append($block);
      $block = null;
      if (checkForWin()){
        $('#announce-game-won').text('You Win!')
      };
    }
  });

  function isLegal(stack) {
    return ($block.data('block') < $(stack).children().last().data('block'))
  }

  function isEmpty(stack) {
    return $(stack).children().length === 0;
  }

  function checkForWin() {
    return $('[data-stack="2"]').children().length === 4 ||
      $('[data-stack="3"]').children().length === 4;
  }
});
