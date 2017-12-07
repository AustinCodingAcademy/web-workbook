'use strict';

$(document).ready(function() {
  const block100 = $('[data-block="100"]').data();
  const block75 = $('[data-block="75"]').data();
  const block50 = $('[data-block="50"]').data();
  const block25 = $('[data-block="25"]').data();

  let $playerMove = null;
  let homeStack = 1;
  $('[data-stack]').click(function() {
    if ($playerMove === null && $(this).children().length > 0 && $('#announce-win').text() === '') {
      $playerMove = $(this).children().last().detach()
      homeStack = $(this).data('stack');
    } else if ($(this).children().length > 0 && $('#announce-win').text() === '') {
      if (($(this).children().last().data('block')) < ($playerMove.data('block'))) {
        $playerMove.appendTo($(`[data-stack=${homeStack}]`));
        $playerMove = null;
      } else if ($(this).children().last().data('block') > $playerMove.data('block')) {
        $(this).append($playerMove);
        $playerMove = null;
        if ($(this).data('stack') === 3 && $(this).children().length > 3) {
          $('#announce-win').text('Success!');
        }
      }
    } else if ($(this).children().length === 0 && $('#announce-win').text() === '') {
        $playerMove.appendTo($(this));
        $playerMove = null;
    }
  })

});
