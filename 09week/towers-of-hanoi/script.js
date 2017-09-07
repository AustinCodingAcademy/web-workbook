'use strict';

$(document).ready(function() {

  let $rings = $('[data-stack]').children().last();

  console.log($rings);

  $('[data-block]').draggable({
      revert: 'invalid'
  });

  $('[data-stack]').each(function(){
    $(this).droppable({
      drop: function(event, ui){

        let drag = $(ui.draggable).attr('data-block');
        let last = $($(this).children().last()).attr('data-block');

        if(parseInt(drag) > parseInt(last)){
          $(ui.draggable).draggable('option', 'revert', true);
        } else {
          $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        }
      }
    });
  });
});
