'use strict';

$(document).ready(function(){
  $('.draggable').draggable({
   revert: 'invalid'
 });
 $('.dragArea').droppable({
   drop: function(event, ui){
     let $last = ($(this).children().last()).data('block');
     let $dragging = $(ui.draggable).data('block');
     if($dragging > $last){
      $(ui.draggable).draggable('option','revert', true);
    } else{
         $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    }
    checkWin()
   }
 });
 function checkWin(){
   if($("[data-stack=3]").children().length === 4){
     $("#announce-game-won").text('WINNER');
   }
 }
 $('clear').click(function(){
   $("#announce-game-won").empty();
   location.reload();
 })
})
