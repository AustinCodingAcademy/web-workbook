'use strict';

let counter = 0;

$(document).ready(function(){
  $('[data-block]').draggable({
    drag: function(event, ui) {
      let last = ($(this).parent().children().last()).data('block');
      let current = $(this).data('block');
      if(current > last){
        return false
      }
    },
    revert: 'invalid'
  });
  $('[data-stack]').droppable({
    drop: function(event, ui){
      let lastValue = ($(this).children().last()).data('block');
      let draggingValue = $(ui.draggable).data('block');
      if(draggingValue > lastValue){
        $(ui.draggable).draggable('option', 'revert', true);
      }else{
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        counter++;
        $("#counter").text(`Number of moves: ${counter}`);
      }
      checkWin()
    }
  });
  function checkWin(){
    if($('[data-stack="3"]').children().length === 4){
        $("#announce-game-won").text(`You won!!`)
    }
  }
});
