'use strict';

$(document).ready(function() {

function dropIt(event, object, ui){
  var currentValue = $(ui.draggable)[0].attributes[0].value;
  var lastChild = object.children.length && object.children[object.children.length -1].attributes[0].value || 0;
  if (parseInt(currentValue) < parseInt(lastChild) || lastChild == 0){
    $(ui.draggable).appendTo(object).attr('style', 'position: relative');
  }
  else {
    $(ui.draggable).draggable('option','revert',true);
  }
}
function winning() {
  if ($('[data-stack="3"]').children().length == 3){
    alert("Congrats! You Won!");
        }
      }
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('.dropArea').droppable({
    drop: function(event, ui) {
      dropIt(event, this, ui);



    }
  });
});
