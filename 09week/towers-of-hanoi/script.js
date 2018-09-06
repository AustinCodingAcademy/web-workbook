'use strict';

$(document).ready(function(){
  $('[data-block]').draggable({
    revert: 'invalid'
  });
  $('[data-stack]').droppable({
    drop: function(event, ui){
      let $last = ($(this).children().last()).data('block');
      let $dragging = $(ui.draggable).data('block');
        if($dragging > $last){
          $(ui.draggable).draggable('option', 'revert', true);
        }else{
          $(ui.draggable).appendTo(this).attr('style', 'position: "realtive"');
        }
      checkWin()
    }
  });
  if($('[data-stack="3"]').children().length === 4){
      $("#announce-game-won").text(`You won!!`)
  }
});
