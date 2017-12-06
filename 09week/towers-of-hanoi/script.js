'use strict';

$(document).ready(function() {


  function checkWin() {

    if ($('[data-stack=3]').children().length == 4) {

      $('#announce-game-won').text(`Winner winner winner!`)
    }
  }

  $('.draggable').draggable({
    revert: "invalid"
  });

  $('#dropArea, #dropArea2, #dropArea3' ).droppable({

    drop: function(event, ui){
      let drag = $(ui.draggable).data('block');
      let last = ($(this).children().last()).data('block');


      if((drag) > (last)) {
        $(ui.draggable).draggable('option', 'revert', true);
      } else {
        $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      }

      checkWin();

    }
  });


});
