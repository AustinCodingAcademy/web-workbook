'use strict';

$(document).ready(function() {
  function dropIt(event, object, ui){
  var currentvalue = ui.draggable[0].attributes[0].value;
  var lastchild = this.lastChild[0].attributes[0].value;
  if (parseInt(lastChild) >= parseInt(currentvalue) || lastChild==0){
    $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
}
  else {
    $(ui.draggable).draggable('option','revert',true);
  }
}
  $('[data-block]').draggable({
    revert:'invalid'
  });
  $('[data-stack]').droppable({
    drop: function(event , ui){
    $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    dropIt(event, this, ui);
  }

});

});
