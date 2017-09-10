'use strict';

$(document).ready(function() {
  $('[data-block]').draggable({
      revert:"invalid"
    });
      $('[data-stack]').droppable({
        drop: function(event,ui) {
          var drag = $(ui.draggable).attr('data-block');
          accept: 'data-block'
          var last = $(this).children().last().attr('data-block');

          console.log(parseInt(last,10));
          console.log(parseInt(drag,10));

          if(parseInt(drag)>parseInt(last)){
          $(ui.draggable).draggable('option','revert',true);
        }else{
          $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(this);
     }
   }
  });


      var stackThree = $('[data-stack="3"]').children().length;
      if(stackThree === 4) {
        alert("You Win");
    };
  });
