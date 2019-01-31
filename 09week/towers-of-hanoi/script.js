'use strict';

$(document).ready(function() {
$('.draggable').draggable({
revert: true
});

    $('#dropArea, #dropArea, #dropArea').droppable({
      //accepts only items with moveable class.
      accept: ".draggable",
      drop: function (event, ui){
      $(ui.draggable).appendTo(this).attr('style', 'position: relative');

      checkWin()
  }
});
})

function checkWin(){
  if ($('[data-stack="3"]').children().length ==4){
  $('#announce-game-won').text('Winner');
  stop();
  }
}
