'use strict';

$(document).ready(function() {
 $('.draggable').draggable({
   revert: "invalid"
 });
 var count = 0;
 $('#dropArea, #dropArea, #dropArea').droppable({
   drop: function (event,ui){
     count++;
     var drag = $(ui.draggable).data('block');
     console.log(drag);
     var last = $(this).children().last().data('block');
     console.log(last);
    if (drag>last){
        $(ui.draggable).draggable("option","revert",true);
    } else {
      $(ui.draggable).appendTo(this).attr('style','position:relative;');
      }
      checkForWin()
  }
})
function checkForWin() {
  if ($('[data-stack=3]').children().length===4 ){
    $('#announce-game-won').text(`winner`)
  }

}
});
