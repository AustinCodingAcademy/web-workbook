'use strict';

// wait for dom
$(document).ready(function () {
   $('.dragitem').draggable({
		   revert: 'invalid', // remove the drag element(copy) from the stage
		   helper: 'clone', // make a copy of the element that is being dragged
		   start: function(evt) { // drag event
		      // if the top element's id equals the id of the element to be dragged the move is valid
			  if ($(evt.target).parent().children()[0].id == evt.target.id) {
				  return true;
			  }
			  return false;
			}
		}
	);

  function initialize() {
    $("#effect").hide();
    hideAllMessages();
    showHowToPlay();
    initDrag();
    initDrop();
  }



	// register the droppable function with all drop zones
	$('.dropzone').droppable(
		{
		   accept: '.dragitem', // what type of elements are accepted
		   drop: function(evt, ui) { // what happens if we drop
					// select the tower element inside the drop zone
					var tower = $(this).find('.tower');
					// is it allowed to drop here?
					var canDrop = checkDrop(tower, ui.draggable);

					if (true===canDrop) {
						$(ui.draggable).prependTo(tower);
					}
					else {
					  notify('error', 'this move is invalid'); // show error message
					}

					var winning = checkWon(evt.target);
					if (true===winning) {
					  notify('success', 'You won!'); // if yes show success message
					}
	   }
	});


/**
 * check if current move is valid
 */
function checkDrop(tower, disk) {
	// all disks inside the tower
	var towerDisks = tower.children();
	if (towerDisks.length===0 // no disks inside the tower
		|| disk.css('width') <= towerDisks.css('width')) { // dropping disk is smaller then top disk
		return true;
	}
	return false;
}
/**
 * check if user won the game
 */
function checkWon(tower) {
	// if this is the tower to the right and it contains 3 disks
	if (tower.id==='t3' && $(tower).find('.tower').children().length === 3) {
		return true;
	}
	return false;
}

/**
* display error or success messages
*/
function notify(css, txt) {
	// add the error or success class to the element, put text inside and make it visible
	$('.notify').attr('class', 'notify '+css).html(txt).show();
	$('.notify').fadeOut(5000, function() { // fade out over 5 seconds
		$(this).html(''); // remove text
	});
}
