$(document).ready(function() {
  let $block = null;
  $('[data-stack]').on('click', function(event) {
    event.preventDefault();
//check to see if you have block in hand
    let $message = "";
    if ($block === null) {
      $block = ($(this).children().last().detach());
      //    } else if (smaller()) {
    } else if ($block.data('block') < $(this).children().last().data('block') ||
        typeof($(this).children().last().data('block')) === 'undefined') {
      $(this).append($block);
      $block = null;
      $('#announce-game-won').text($message);
      if (checkWin()) {
        $('#announce-game-won').text("You won!");
      }
      } else {
        $message = "Can't place " + $block.data('block') + " on top of " +
          $(this).children().last().data('block') + " ";
        $('#announce-game-won').text($message);
      }
  })
/*
function smaller() {
console.log("current block placing on: "
    + $(this).children().last().data('block'));
// don't allow block to be set on smaller block
    if ($block.data('block') < $(this).children().last().data('block') ||
        typeof($(this).children().last().data('block')) === 'undefined') {
console.log("block set: " + $block.data('block'))
console.log("block set on: " + $(this).children().last().data('block'));
      return true;
    } else {
      return false;
    }
}
*/
  function checkWin() {
    let $total1 = $('[data-stack="1"]').children().length;
    let $total2 = $('[data-stack="2"]').children().length;
    let $total3 = $('[data-stack="3"]').children().length;
    if ($total1 === 4 || $total2 === 4 || $total3 === 4) {
      return true;
    }
  }
});
