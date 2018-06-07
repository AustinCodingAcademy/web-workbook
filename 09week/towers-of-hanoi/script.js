'use strict';

$(document).ready(function() {

  $('.draggable').draggable({ //allows the classed draggable items to become draggable
    revert: 'invalid'
  })

  $('#dropArea, #dropArea2, #dropArea3').droppable({ //lists the allows drop areas and assigns
    drop: function(event, ui){      //begins a function to drop specifying the UI (what is in your hand/mouse)
      let $dragging = $(ui.draggable).data('block');
      let $last = $(this).children('div:last').data('block');

      if ($dragging > $last){
        $(ui.draggable).draggable('option', 'revert', true);
      }else{
          $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
        }
        checkWin();
    }
  });

function checkWin (){
  if ($('[data-stack=3]').children().length === 4) {
    $('#announce-game-won').text(`Winner Winner Winner!!!!`);
  }
}

$('#clear').click(function(){
  $('#announce-game-won').empty();
  location.reload();
})

});
