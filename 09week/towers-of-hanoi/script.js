'use strict';

$(document).ready(function() {

  // Declare Variables
  var $userMove = null;
  var currentStack;

  // Function to click and store the stack element to an empty block
  $('[data-stack]').click(function() {
    if($userMove === null && $(this).children().length > 0){
      $userMove = $(this).children().last().detach();
      currentStack = $(this).attr('data-stack');
    } else if (($(this).children().length > 0)) {
      if(($(this).children().last().data('block')) < ($userMove.data('block'))){
        $userMove.appendTo($('[data-stack]').eq(currentStack - 1));
        $userMove = null;
          } else if (($(this).children().last().data('block')) > ($userMove.data('block'))) {
            $(this).append($userMove);
            $userMove = null;
          } else if ($(this).children().length === 0) {
            $userMove.appendTo($(this));
            $userMove = null;
          }
    }
    //checkWins();
  })

  // function checkWins() {
  //   if($('[data-stack = "3"]').children().length === 4) {
  //     $('#announce-game-won').text("You Won!");
  //   }
  // }

});
