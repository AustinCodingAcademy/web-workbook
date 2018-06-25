'use strict';

$(document).ready(function() {
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

  $(".stacks").one("drag", function increment() {
    // console.log("in the one click function");

    setTimeout(function(){
      time++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10);
      var tenths = time % 10;

      if (mins <10){
        mins = "0" + mins;
      }
      if (secs < 10){
        secs = "0" + secs;
      }
      $("#timer").text(mins + ":" + secs + ":" + "0" + tenths);
      increment();
    }, 100);
  });

  // function increment(){
  //
  // }

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
      if ((currentSize < previousSize || previousSize === undefined || stack.children.length === 0)) {
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
        if (currentSize === 25 && towerNumber === 3 && stackLength === 4) {
          console.log("it's a win!");
          $(".stacks").hide();
          $("header").hide();
          $("#trackers").hide();
          document.getElementById("gameboard").style.borderStyle = "none";
          document.getElementById("gameboard").style.margin = "0";
          $("#gameboard").prepend("<div id = 'announcewin'></div");
        }
      } else if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          alert("You may NEVER place a larger block on a smaller block!!")
      }
  }, false);
});
