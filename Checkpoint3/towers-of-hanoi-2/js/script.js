'use strict';

    //makes sure DOM has loaded
$(document).ready(function() {

    //variables used
  var $block = null;
  var $message = "";

    //selects block
  $('[data-stack]').on('click', function(event) {

    //check to see if you have block in hand
    if ($block === null) {
      $block = ($(this).children().last().detach());

      // checks if smaller
    } else if ($block.data('block') < $(this).children().last().data('block') || typeof($(this).children().last().data('block')) === 'undefined') {

    //uses checkWin function to announce winner
      $(this).append($block);
      $block = null;
      $('#announce-game-won').text($message);
      if (checkWin()) {
      $('#announce-game-won').text("Success!");
      }
    } else {
      $message = 'Sorry, ' + $block.data('block') + ' cannot be placed on ' +
        $(this).children().last().data('block') + " ";
      $('#announce-game-won').text($message);
    }
  })

    //checks containers if children have loaded in tower
  function checkWin() {
    let $countOne = $('[data-stack="1"]').children().length;
    let $countTwo = $('[data-stack="2"]').children().length;
    let $countThree = $('[data-stack="3"]').children().length;
    if ($countTwo === 4 || $countThree === 4) {
      return true;
    }
  }
});
