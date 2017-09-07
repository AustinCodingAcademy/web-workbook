'use strict';

$(document).ready(function() {
  // Put app logic here
  $('[data-block]').draggable({
    revert: "invalid"
  });

  $('[data-stack]').droppable({
      drop: function(event, ui){
  //    var drag = $(ui.draggable).attr('data-block');
  //      var last = $($(this).children().last()[0]);
  //      if (parseInt($(drag)) > parseInt($(last))); {
  //        $(ui.draggable).draggable('option', 'revert', true);
         $(ui.draggable).appendTo(this).attr('style', 'position: relative');
  //      }
      }
  });


});

  //make blocks draggable/droppable
  //rules: smaller on top(children/lastchild)
  //winstate
  //can't drop outside of the blocks
  //(if event is larger that lastchild)
  // reset lastchild => var lastchild=$(this.children().last()[0];
  //convert data-block to value parseInt()
