'use strict';

$(document).ready(function() {
  var dragged;
  var dropped;
  let currentSize = null;
  let previousSize = null;
  let tower = null;



  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // currentTower = event.target.parentNode.getAttribute('data-stack');
      // console.log(currentTower)
      currentSize = parseInt(dragged.getAttribute('data-block'));
      console.log("currentSize =" + currentSize);
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
          tower = parseInt(event.target.getAttribute('data-stack'));
          console.log("tower = " +tower);
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // var $previousBlock = parseInt(document.getElementsByClass("dropzone").children().first().attr('data-block'));
      // var $stack = parseInt(document.getElementsByClass("dropzone").children().length);
      // console.log("in the drop function. $previousBlock: " + $previousBlock + ". stack " + $stack);

      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      while (currentSize < previousSize || previousSize === null) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        dropped = event.target.appendChild( dragged );
        previousSize = parseInt(dropped.getAttribute('data-block'));
        console.log(previousSize + " has been dropped!");
      }




      // if (currentSize > previousSize && currentTower === previousTower && previousSize !==null){
      //   alert("That's against the rules, ya cheater!");
      // }
      //   // if ( event.target.className == "dropzone" && event.target.className == "winner" && top is 25 && three beneath it) {
      //   //   event.target.style.background = "";
      //   //   dragged.parentNode.removeChild( dragged );
      //   //   event.target.appendChild( dragged );
      //   //   console.log("it's a win!")
      //   //     $('#announce-game-won').add("<h1>YOU WON!</h1>").appendTo('#announce-game-won');
      //   //   } else {
      //   //     event.target.style.background = "";
      //   //     dragged.parentNode.removeChild( dragged );
      //   //     event.target.appendChild( dragged );
      // else if ( event.target.className == "dropzone") {
      //     event.target.style.background = "";
      //     previousTower = parseInt(event.target.getAttribute('data-stack'));
      //     dragged.parentNode.removeChild( dragged );
      //     dropped = event.target.appendChild( dragged );
      //     previousSize = parseInt(dropped.getAttribute('data-block'));
      //     console.log ("else if just executed, previous size is now = " + previousSize + "and previous tower is " +previousTower);
      // }

      // }

  }, false);
});

//click code

//  $('[data-stack]').click(function() {
//  let $tower = parseInt($(this).attr('data-stack'));
//  let $previousBlock = parseInt($(this).children().first().attr('data-block'));
//  let $stack = parseInt($(this).children().length);
//  console.log("in the click function. $previousBlock: " + $previousBlock);
//  console.log("$tower: " + $tower + " stack: " + $stack);
//
//     if ($block && ($size > $previousBlock) && ($previousBlock !== null)) {
//         alert("That's against the rules, ya cheater!");
//       } else if ($block) {
//         $(this).prepend($block);
//         $size = parseInt($block.attr('data-block'));
//         console.log("elseif statement ran. $size: " + $size + " $tower: " + $tower + " $previousBlock: " + $previousBlock);
//         if ($size === 25 && $tower === 3 && $stack === 3) {
//           console.log("it's a win!")
//           $('#announce-game-won').add("<h1>YOU WON!</h1>").appendTo('#announce-game-won');
//         } else {
//           $block = null;
//         }
//       } else {
//           $block = $(this).children().first().detach();
//           $size = parseInt($block.attr('data-block'));
//           console.log("else statement ran. $size: " + $size + " $tower: " + $tower + " $previousBlock: " + $previousBlock);
//       }
// })
