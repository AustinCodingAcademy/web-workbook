'use strict';

$(document).ready(function() {
//defining variables
  var dragged;
  var dropped;
  var currentSize;
  var previous;
  var previousSize;
  var stack;
  var stackLength;
  var towerNumber;
  var moves = 0;
  var time = 0;

// Begin function for timer. Will run starting on the first time the user drags a block
  $(".stacks").one("drag", function increment() {
    // console.log("in the one click function");

    setTimeout(function(){
      time++
      var mins = Math.floor(time/10/60);
      var secs = Math.floor((time-mins*600)/10);
      var tenths = time % 10;
      if (mins <10) {
        mins = "0" + mins;
      }
      if (secs < 10){
        secs = "0" + secs;
      }
      $("#timer").text(mins + ":" + secs + ":" + "0" + tenths);

      increment();

      }, 100);
    });

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      currentSize = parseInt(dragged.getAttribute('data-block'));
      console.log("currentSize =" + currentSize);
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
      // console.log ("in dragend")
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      // console.log("in dragover")
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "goldenrod";
          stack = event.target;
          previous = stack.children[0];
          if (previous !== undefined) {
            console.log("this is previous " + previous);
            previousSize = parseInt(previous.getAttribute('data-block'));
          }
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          // console.log("in dragleave");
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.className!== "dropzone"){

      } else if (currentSize < previousSize || previousSize === undefined || stack.children.length === 0) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        dropped = event.target.insertBefore(dragged, stack.children[0]);
        towerNumber = parseInt(stack.getAttribute('data-stack'));
        stackLength = parseInt(stack.children.length);
        moves++
        $("#moves").text(moves);
        console.log("youve used this many moves: " +moves);
        console.log(currentSize + " has been dropped in tower " + towerNumber);
        console.log ("tower length =" + stackLength);
      } else if (currentSize > previousSize && event.target.className === "dropzone") {
          event.target.style.background = "";
          // prevents larger from being dropped on smaller, and sets background back to blank
      } else if ( event.target.className === "dropzone" ) {
          event.target.style.background = "";
          // if a block is picked up and put back down in a dropzone, the background will turn to blank
      }
     checkForWins();
  }, false);

//begin function defining a win; this is called after every drop
  function checkForWins(){
    console.log("check for wins was called");
    if (currentSize === 25 && towerNumber === 3 && stackLength === 1) {
      console.log("it's a win!");
      $("#container").prepend("<div id = 'announcewin'></div");
      $("header").hide();
      $("#gameboard").hide();
      $("#trackers").hide();
      $("#announcewin").append("<input id = 'playagain' type = 'button' value = 'PLAY AGAIN' onclick = 'window.location.reload()'></input>")
    }
  }
});
