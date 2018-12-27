'use strict';

$(document).ready(function() {
  $('.draggable').draggable({
    revert: 'invalid'
  });
});

$('.droppable').droppable({
  drop: function( event, ui) {
    let drag = $(ui.draggable).data('block');
    console.log(drag);
    let last = $(this).children().last().data('block');
    console.log(last);
    if (drag > last) {
      $(ui.draggable).draggable('option', 'revert', true);
    } else { 
      $$(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    }
    checkForWin();
  }
})

function checkForWin() {
  if ($('[data-stack="3"]').children().length === 4) {
    $('#announce').text("Congrats! You've completed the game!")
  }
}

