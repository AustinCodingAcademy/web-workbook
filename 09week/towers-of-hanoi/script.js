'use strict';

$(document).ready(function() {
  //making element draggable
  $('[data-block]').draggable({
    revert: 'invalid'
  });

  //  //making element drop only into big div
  // $('[data-stack]').droppable({
  //   drop: function(event, ui) {
  //     $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
  //   }
  // });

//checking for what the div is equal to
  let $current = null;
  $('[data-stack]').click(function(){
    $current = $(this).children().last().detach();
    console.log($current);
      if($(this).children().length === 0) {
        $(this).appendTo('[data-stack]')
      }  
  })



//announce winner
  var checkWinner = $('[data-stack="3"]').children().length
  if(checkWinner === 4) {
    alert('You win!');
  }
});
