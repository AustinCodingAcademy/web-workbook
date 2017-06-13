'use strict';

$(document).ready(function() {
  $('[data-block]').draggable({
    revert: "invalid"
  });
$('[data-stack]').droppable({
  drop: function(event, ui) {
    $(ui.draggable).appendTo(this).attr('style','position: "realative"');
  }


});
});
