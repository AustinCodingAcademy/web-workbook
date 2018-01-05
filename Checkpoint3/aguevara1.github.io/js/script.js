
'use strict';

$(document).ready(function() {
  //if ($(this).next().length == 0) {

    $('[data-block]').draggable({
      revert: "invalid"
    });
    console.log("hello 1");

    $('[data-stack]').droppable({
      drop: function(ev, ui) {

        var drag = ui.draggable;
        var num = 0;
        var numBlocks = 0;
        var blockValue = 0;
        var last = $(this).children().last().attr('data-block');

        var drag = $(ui.draggable).attr('data-block');
        accept: 'data-block'
        if($(ui.draggable).next().length==0){
            console.log('the top one');
        }else
          console.log('Not the top one');


        //console.log(num);
        console.log(parseInt(last, 10));
        console.log(parseInt(drag, 10));
        // $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this); //This snaps divs to bottom,center


        //Comparing size of picked up element with the last one on stack
        if (parseInt(drag) > parseInt(last)|| $(ui.draggable).next().length!=0){

          console.log('too big');
          $(ui.draggable).draggable('option', 'revert', true);
        } else {
          $(ui.draggable).detach().css({
            top: 0,
            left: 0
          }).appendTo(this);
          // $(drag).detach().css({top: 0,left: 0}).appendTo(last).attr('style', 'position:relative');
        }
        var stackTwo = $('[data-stack="2"]').children().length;
        console.log("stack 2 has " + stackTwo);
        if (stackTwo === 4) {
          alert("YOU WON IN STACK TWO!!!");
        }
        var stackThree = $('[data-stack="3"]').children().length;
        console.log("stack 3 has " + stackThree);
        if (stackThree === 4) {
          alert("YOU WON IN STACK THREE!!!");
        }
        // Button for clearing the whole board

      }

    });

  $('#clear').click(clickClear);

//  $("#clear").click(function () {
  //    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
  //   $('[data-stack="2"]').empty();
  //  $('[data-stack="3"]').empty();
// });

});

function clickClear() {
  //find all data-stacks, then empty them
  $('div[data-stack]').empty();
  //find stack1
  var stack1 = $('div[data-stack="1"]');
  //add 4 blocks into the stack

  for (var i=25; i <= 100; i+=25) {
    console.log( 'in for loop');
    $('[data-stack="1"]').prepend('<div data-block="' + i + '"></div>');
  }
  //make blocks draggable again
  //setBlockDraggable();
  //$('#announce-game-won').text('');
  $('[data-block]').draggable({
    revert: "invalid"
  });
}
