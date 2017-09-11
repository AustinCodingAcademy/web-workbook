'use strict';


$(document).ready(function() {

  var $block = false;
  var $message = "";

  $('[data-stack]').on('click', function(event) {
    event.preventDefault();

    // $('[data-block]').draggable({
    //   containment: '[data-stack]' });


    //check to see if you have block in hand
    if ($block === false) {
      $block = ($(this).children().last().detach());

      // } else if (smaller()) {
    } else if ($block.data('block') < $(this).children().last().data('block') || typeof($(this).children().last().data('block')) === 'undefined') {

      $(this).append($block);
      $block = false;
      $('#announce-game-won').text($message);
      if (checkWin()) {
        $('#announce-game-won').text("You're a winner!");
      }
    } else {
      $message = 'Sorry, ' + $block.data('block') + ' cannot be placed on ' +
        $(this).children().last().data('block') + " ";
      $('#announce-game-won').text($message);
    }
  })

  function checkWin() {
    let $countOne = $('[data-stack="1"]').children().length;
    let $countTwo = $('[data-stack="2"]').children().length;
    let $countThree = $('[data-stack="3"]').children().length;
    if ($countOne === 4 || $countTwo === 4 || $countThree === 4) {
      return true;
    }
  }
});
