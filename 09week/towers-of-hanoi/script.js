'use strict';

$(document).ready(function() {
  $('[data-block]').draggable({
    revert: "invalid"
  });
$('[data-stack]').droppable({
  drop: function(event, ui) {

var drag = $(ui.draggable).attr('data-block');
var lastChild = $(this).children().last()[0];
var LastChildval = $(lastChild).attr('data-block');
if (parseInt(drag) > parseInt(LastChildval)) {
  $(ui.draggable).draggable('option','revert', true);
} else {
  $(ui.draggable).appendTo(this).attr('style','position: "realative"');
  }
}
});

});
