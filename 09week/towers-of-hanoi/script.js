'use strict';

$(document).ready(function() {
  // Put app logic here
  $('[data-block]').draggable({
    revert: "invalid"
});

  $('[data-stack]').droppable({
    drop:function(event, ui){
      $(ui.draggable).appendTo(this).attr('style', 'position: relative');

    }
  });

});

  //make blocks draggable/droppable
  //rules: smaller on top(children/lastchild)
  //winstate
  //can't drop outside of the blocks
  //(if event is larger that lastchild)
  // reset lastchild => var lastchild=$9this.children().last()[0];
