'use strict';

$(document).ready(function() {

//makes the divs with class of "draggable" draggable with the "draggable" function with revert set to invalid
$('.draggable').draggable({
  revert: 'invalid'
})

//makes the drop areas droppable boiii
$('#dropArea3, #dropArea1, #dropArea2').droppable({
  drop: function(event, ui){
    let $dragging = $(ui.draggable).data('block');
    console.log($dragging);
    let $last = ($(this).children().last()).data('block');
    console.log($last);

    if($dragging > $last){
      $(ui.draggable).draggable('option', 'revert', true)
    }
    else{
      $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
    }
     checkWin();

  }
});

  function checkWin() {
    if($('[data-stack=3]').children().length === 4){
      $('#announce-game-won').text('Winner!');
    }
  }

  $('#clear').click(function(){
    $('#announce-game-won').empty();
    location.reload();

  })

});
