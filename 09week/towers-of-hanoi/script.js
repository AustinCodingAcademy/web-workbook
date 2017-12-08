'use strict';

$(document).ready(function() {

let $currentStack;
let $current = null;
$('[data-stack]').click(function() {
  if ($current === null && $(this).children().length > 0) {
    $current = $(this).children().last().detach();
    $currentStack=$(this);
  }else if($(this).children().length > 0) {
    if($(this).children().last().data('block') < ($current.data('block'))) {
      //new code
      $current.appendTo($currentStack);
      $current = null;
    }else if($(this).children().last().data('block') > ($current.data('block'))) {
      $(this).append($current);
      $current = null;
    }
  }else if ($(this).children().length === 0) {
    $current.appendTo($(this));
    $current = null;
  }

  var $checkWinner = $('[data-stack="3"]').children().length;
  if ($checkWinner === 4) {
    alert('You win!');
  };
})


//announce winner

});
