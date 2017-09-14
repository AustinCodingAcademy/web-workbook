'use strict';

$(document).ready(function() {
  $('[data-block]').draggable({
    revert: "invalid"
  });
   console.log("hello 1");

    var max="300";

  $('[data-stack]').droppable({
      drop: function(ev, ui) {

        var drag = ui.draggable;
        var num=0;
        var numBlocks=0;
        var blockValue=0;
      var last = $(this).children().last().attr('data-block');
      var drag = $(ui.draggable).attr('data-block');
            accept:'data-block'

      //console.log(num);
      console.log(parseInt(last,10));
      console.log(parseInt(drag,10));
      // $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this); //This snaps divs to bottom,center
       console.log('dragging');


   if (parseInt(drag) > parseInt(last)){
         //alert("too big buddy");
       $(ui.draggable).draggable('option', 'revert', true);
     }else{
       $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
  // $(drag).detach().css({top: 0,left: 0}).appendTo(last).attr('style', 'position:relative');
   }
var stackTwo = $('[data-stack="2"]').children().length;
        console.log("stack 2 has "+stackTwo);
       if(stackTwo===4){
         alert("YOU WON IN STACK TWO!!!");
       }
var stackThree = $('[data-stack="3"]').children().length;
        console.log("stack 3 has "+stackThree);
        if(stackThree===4){
        alert("YOU WON IN STACK THREE!!!");
        }


        // Button for clearing the whole board
        $('#clear').on('click', function() {
        //  $('[data-stack="2"]').empty('');
               $('data-block').css({"top":" ","left":" "});
        });


 }

});

 });


/*
      $('[data-block]').draggable({
        revert: "invalid"

      });


      $('[data-stack]').droppable({
          drop: function(event, ui) {
            var last = $($(this).children().last()[0].attr('data-block'));
            var drag = $(ui.draggable).attr('data-block');
            if (parseInt(drag) > parseInt(last)){
                $(ui.draggable).draggable('option', 'revert', true);
                $(ui.draggable).originalPosition = {top:0, left:0}
              } else {
                $(ui.draggable).appendTo(this).attr('style', 'position:relative');
              }
            }
          });
*/
