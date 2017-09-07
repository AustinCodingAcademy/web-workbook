'use strict';

$(document).ready(function() {
  $('[data-block]').draggable({
      revert:"invalid"
    });
      $('[data-stack]').droppable({
        drop: function(event,ui) {
          var drag = $(ui.draggable).attr('data-block');
          var last = $($(this).children().last()[0].attr('data-block'));

          if(parseInt(drag)>parseInt(last)){
          $(ui.draggable).draggable('option','revert',true);
        }else{
          $(ui.draggable).appendTo(this).attr('style','position:relative');
     }
   }
  });
  });


// var lastChild = $(this).children().last()[0];
// last in first out

// Turn a string into a value
// parseInt([....])
