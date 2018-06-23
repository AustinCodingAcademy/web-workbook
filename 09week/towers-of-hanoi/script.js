'use strict';

$(document).ready(function() {
 $('.draggable').draggable({
   revert: "invalid"
 });
 var count = 0;
 $('#dropArea, #dropArea, #dropArea').droppable({
   drop: function (event, ui){
     count++;
     var drag = $(ui.draggable).data('block');
     console.log(drag);
     var last = $(this).children().last().data('block');
     console.log(last);

  }
})

});
