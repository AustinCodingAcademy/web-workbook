'use strict';

$(document).ready(function() {
  let $block = null;

  $('[data-stack]').click(function() {

    if ($block) {
      $(this).append($block);
      checkForWin();
      $block = null;
    } else {
      $block = $(this).children().last().detach();

    }

  })


  function checkForWin() {
    if ($('[data-stack="3"]').children().length === 4) {
      alert('You Won!');
    }
    else if ($('[data-stack="2"]').children().length === 4) {
      alert('You Won!');
    }
  }

  $('#clear').on('click', function() {
    location.reload();
  });

})
