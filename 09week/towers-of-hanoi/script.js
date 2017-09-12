
'use strict';

$(document).ready(function() {

  let currentStack;
  let playerMove = null;
  let discNumber = 4;

  $('[data-stack]').click(function(){
    if(playerMove === null && $(this).children().length > 0){
      playerMove = $(this).children().last().detach();
      currentStack = $(this).attr('data-stack');
    } else if($(this).children().length > 0){
      if(parseInt($(this).children().last().attr('data-block')) < parseInt(playerMove.attr('data-block'))){
        playerMove.appendTo($('[data-stack]').eq(currentStack - 1));
        playerMove = null;
      } else if(parseInt($(this).children().last().attr('data-block')) > parseInt(playerMove.attr('data-block'))){
        $(this).append(playerMove);
        playerMove = null;
      }
    } else if($(this).children().length === 0){
      playerMove.appendTo($(this));
      playerMove = null;
    }

    if($('[data-stack]').eq(2).children().length === discNumber){
      $('#announce-game-won').append('<h1>YOU WIN!</h1>');
    }

  });

/*
  console.log(parseInt($(this).attr('[data-block][0]')));

  // if(parseInt($rings) < 100){
  //   $('[data-block]').draggable({
  //       revert: 'invalid'
  //   });
  // }

  $('[data-block]').draggable({
    revert: 'invalid'
  })

  $('[data-stack]').each(function(){
    $(this).droppable({
      drop: function(event, ui){

        let drag = $(ui.draggable).attr('data-block');
        let last = $($(this).children().last()).attr('data-block');

        console.log(drag + " " + last);

        if(parseInt(drag) > parseInt(last)){
          $(ui.draggable).draggable('option', 'revert', true);
        } else {
          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        }
      }
    });
  });
  */
});
