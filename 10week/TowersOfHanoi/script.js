$(document).ready(function() {
  let $block = null;

  $('[data-stack]').click(function() {
    console.log($(this));
    if(!$block){
      $block = $(this).children().last().detach();
    }else if($(this).children().length === 0 || $block.data('block') < $(this).children().last().data('block')){
      $(this).append($block);
      $block = null;
    }if( checkForWin()) {
      $('#announce-game-won').text('You Win!');
    }

  });

});

function checkForWin() {

  return ($('[data-stack="2"]').children().length === 4 ||
  $('[data-stack="3"]').children().length === 4);
}
