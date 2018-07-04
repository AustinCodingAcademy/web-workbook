'use strict';

$(document).ready(function() {
  //the draggable are my blocks
  // the droppable areas are my Towers

 $('.draggable').draggable({
   revert: "invalid"
 });
 var count = 0;

 $('#dropArea, #dropArea, #dropArea').droppable({
   drop: function (event,ui){
     count++;
     var drag = $(ui.draggable).data('block');
     console.log(drag);
     // targeting the last child of the data blovk in play
     var last = $(this).children().last().data('block');
     console.log(last);
    if (drag>last){
      // giving the block the option to revert back to the original position
        $(ui.draggable).draggable("option","revert",true);
    } else {
      $(ui.draggable).appendTo(this).attr('style','position:relative;');
      }
      checkForWin()
  }
})
// creating a new function to check for Winner.
function checkForWin() {
  if ($('[data-stack=3]').children().length===4 ){
    $('#announce-game-won').text(`winner`)
  }

}
});
