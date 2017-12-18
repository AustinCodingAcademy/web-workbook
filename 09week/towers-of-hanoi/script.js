'use strict';

$(document).ready(function() {
  let $playerMove = null
  let currentStack;
  var counter = 0;

  $('[data-stack]').click(function(){
    if ($playerMove === null && $(this).children().length > 0){
      $playerMove = $(this).children().last().detach();
      currentStack = $(this).attr('data-stack');
      counter++;
      $('.count').html("Total Moves: "+counter);
    } else if (($(this).children().length > 0)){
      console.log($playerMove, currentStack);
      if (($(this).children().last().data('block')) < ($playerMove.data('block'))){
        $playerMove.appendTo($('[data-stack]').eq(currentStack - 1));
        $playerMove = null;
      } else if (($(this).children().last().data('block')) > ($playerMove.data('block'))){
        $(this).append($playerMove);
        $playerMove = null;
      }

    } else if ($(this).children().length === 0){
      $playerMove.appendTo($(this));
      $playerMove = null;
    };

    if($('[data-stack=3]').children().length === 4){
      $('#announce-game-won').text('You Win!')
    };

  });

  $('.button').click(function(){
    location.reload();
  });

});
