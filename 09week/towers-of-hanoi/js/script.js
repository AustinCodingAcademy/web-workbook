'use strict';

$(document).ready(function() {
  // Put app logic here

  let $gamePiece = null;

  $("[data-stack]").click(function() {
    if ($gamePiece) {
      let $lastBlock = $(this).children().last();
      if (!$lastBlock.length || $lastBlock.data('block') > $gamePiece.data('block')) {
        $(this).append($gamePiece);
        $gamePiece = null;
        checkForWin();
      }
    } else {
      $gamePiece = $(this).children().last().detach();
    }
  });

  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $('#announce-game-won').text('You Won');
    }
  }


});
