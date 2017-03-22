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
      $('#reset').click(resetBoard)
  });
  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text(`You Win!`);
    }
  }
  function resetBoard() {
    $block100 = $('[data-block="100"]').detach();
    $block75 = $('[data-block="75"]').detach();
    $block50 = $('[data-block="50"]').detach();
    $block25 = $('[data-block="25"]').detach();
    $('[data-stack="1"]').append($block100, $block75, $block50, $block25);

  }
});
