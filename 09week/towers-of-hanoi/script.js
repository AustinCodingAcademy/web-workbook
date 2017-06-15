'use strict';

//var pieceSize = $(.draggable).attribute[1].value();

$(document).ready(function() {
  $(".gamePiece").draggable({
    revert: "invalid"
  });
  $(".container").droppable({
    drop: function(event, ui) {
      $(ui.draggable).appendTo(this).attr('style', 'position: relative');
      $(ui.draggable).draggable('option','revert',true);
    }
    });
});
