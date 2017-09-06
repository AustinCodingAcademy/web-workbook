'use strict';
f
$(document).ready(function() {
  // Put app logic here


  $('.draggable').draggable({
    revert: "invalid"
  });

  $('[data-stack]').droppable( {
    drop: function(event, ui){
      var drag = $(ui.draggable).attr('data-block');
      var last = $(this).children().last()[0]).attr('data-block');
      if(parseInt(drag) > parseInt(last)){
        $(ui.draggable).appendTo(this).attr('style', 'position:relative');
      }else {
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');



      // $(ui.draggable).appendTo(this).attr('style', 'position:relative');
      // if($parseInt($(ui.draggable).attr('[data-block]')>parseInt(last) )){
      // console.log(p)arseInt($(ui.draggable).attr('[data-block]'))
      // $(ui.draggable).draggable('option', 'revert', true);

    }
    }

  });

  });
// });
