"use strict";
//what we know
// can only move one piece at a time
// cant place larger blocks on top of smaller blocks
// to win must move all blocks to farthest column in same order or start
// start with three blocks, increase by one block per level completed

$(document).ready(function () {
  //Set up global variables
  let block = null;
  let currentHoveredColumn = null;
  let gameOver = false;
  if (!gameOver) {
    $("[data-block]").draggable({ //Used to prevent all but first block from being dragged, also to return block to original position if drop not succeed
      create: function () { //On creation of blocks, make all but first child not draggable
        if ($(this).is(":not(:first-child)")) {
          $(this).draggable('disable');
        }
      },
      stop: function () { //Once dragging is comlete, reset draggable property so that only first block can be dragged
        if (!gameOver) {//If game over has not happened
          $("[data-block]:first-child").draggable('enable');
          $("[data-block]:not(:first-child)").draggable('disable');
        }
      },
      revert: true //Allow returning to original position
    });

    $("[data-stack]").droppable({
      drop: function (event, ui) {
        if ($(this).children().length != 0) { //Checks if stack has any existing children
          if (parseInt($(ui.draggable).attr("data-block")) <= parseInt($(this).children().first().attr('data-block'))) { //If so, compares block value to first childs value, if less than or equal to, allow dropping
            $(ui.draggable).detach().css({
              top: 0,
              left: 0
            }).prependTo(this);
            if ($(this).attr("data-stack") == 3) //If column dropped onto is column 3
            {
              if ($(this).children().length === 4) //If column 3 has all 4 blocks
              {
                $("#announce-winner").text("You Win!"); //Tell player they won
                gameOver = true;
                $("[data-block]").draggable('disable'); //Prevent blocks from being dragged
              }
            }
          } else { //If first block is not larger, prevent dropping into column / do nothing
          }
        } else { //Append block to column if emtpy
          $(ui.draggable).detach().css({
            top: 0,
            left: 0
          }).prependTo(this);
        }
      }
    });

    $("#reset").click(function () { //When reset button is clicked
      location.reload(); //Refresh page to reset game
    })
  }
});