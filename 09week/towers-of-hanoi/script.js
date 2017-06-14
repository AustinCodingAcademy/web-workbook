
$(document).ready(function() {
  'use strict';

  // code plan follows:

  // the object of the game is to move the stack of rings to another data-stack
  var block = $('[data-block]');
  var stack = $('[data-stack]');
  var moveable = $('[data-block]:first-child');
  moveable = moveable.addClass('moveable');
  // drag each ring one at a time (make ring draggable)
  // function calls to make the rings draggable and stacks droppable

  function makeDraggable() {

    moveable.draggable({
      revert: 'invalid',
      helper:"clone",
      containment:"document",
  });
}

  function makeDroppable(){


    stack.droppable({
      accept: $(".moveable"),
      drop:function(event, ui) {
        var tower = $(this);

        var canDrop = checkForDroppability(ui.draggable[0], tower);

        if (canDrop === true) {

        ui.draggable.detach().prependTo(tower);
        resetMoveable ();

      } else {
        console.log('bananas');
      }
    }
  });
}
makeDraggable();
makeDroppable();

// check for droppability, check to see if size is smaller than first in stack
function checkForDroppability(disk, tower) {
  var towerDisks = $(tower).children();
	if (towerDisks.length === 0 || parseInt($(disk).attr('data-block')) <= parseInt(towerDisks.last().attr('data-block'))) { // dropping disk is smaller than top disk
		return true;
	} else
	return false;
}


// reset the first ring in a stack to draggable
function resetMoveable() {
  moveable = $('[data-block]:first-child');
  // $('[data-block]').removeClass('moveable');
  moveable.addClass('moveable');
  makeDraggable();
  makeDroppable();
}

  // without putting a smaller ring on top of a larger one
  // make sure when an element is dragged, it appends to new div, becoming first-child
  // this code changes the first child to current top item
  // when the game has been won delcare a winner
  // after winner declared allow reset button to be clicked

});
