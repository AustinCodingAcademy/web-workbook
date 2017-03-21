$(document).ready(function() {
  let $block = null;
  $('[data-stack]').click(function(){
    if (!$block){
      $block = $(this).children().last().detach();
    } else if ($(this).children().length === 0 || $(this).children().last().data('block') > $block.data('block'))  {
      $(this).append($block);
      $block = null;
      checkForWin();
    }
  });
  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      console.log('YOU WIN!');
    }
  }
});
