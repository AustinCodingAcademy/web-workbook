'use strict';

$(document).ready(function() {

// timer
  var clear;
  function stopWatch() {
    clear = setTimeout(function() {}, 1000);
  }
  var count = 0;
  var clearTime;
  var seconds = 0, minutes = 0, hours = 0;
  var clearState;
  var secs, mins, hrs;
  function startWatch() {
     if (seconds === 60) {
       seconds = 0; minutes = minutes + 1;
     }
     mins = (minutes < 10) ? ('0' + minutes + ': ') : (minutes + ': ');
     if (minutes === 60) {
       minutes = 0; hours = hours + 1;
     }
     hrs = (hours < 10) ? ('0' + hours + ': ') : (hours + ': ');
     secs = (seconds < 10) ? ('0' + seconds) : seconds;
     // display the stopwatch
     var x = $('#timer');
     x.innerHTML = 'Time: ' + hrs + mins + secs;
     seconds++;
     clearTime = setTimeout(function startWatch() {}, 1000);
   }
     //create a function to start the stop watch
  function startTime() {
  if (seconds === 0 && minutes === 0 && hours === 0) {
   /* hide the fulltime when the stop watch is running */
   var fulltime = $('#fulltime');
   fulltime.style.display = "none";
   /* hide the start button if the stop watch is running */
   this.style.display = "none";
   /* call the startWatch() function to execute the stop watch whenever the startTime() is triggered */
   startWatch();
 }}
   window.addEventListener('load', function() {
     var start = $('#start');
     start.addEventListener('click', startTime);
  });

 // stop the time function
 function stopTime() {
   if (seconds !== 0 || minutes !== 0 || hours !== 0) {
     /* display the full time before reseting the stop watch */
     var fulltime = $('#fulltime');
     //display the full time
     fulltime.style.display = "block";
     var time = hrs + mins + secs;
     fulltime.innerHTML = 'Fulltime: ' + time;
     // reset the stop watch
     seconds = 0; minutes = 0; hours = 0;
     secs = '0' + seconds;
     mins = '0' + minutes + ': ';
     hrs = '0' + hours + ': ';
     /* display the stopwatch after it's been stopped */
     var x = $('#timer');
     var stopTime = hrs + mins + secs;
     x.innerHTML = stopTime;
     /* display all stop watch control buttons */
     var showStart = $('#start');
     showStart.style.display = "inline-block";
     var showStop = $('#stop');
     showStop.style.display = "inline-block";
     /* clear the stop watch using the setTimeout() return value 'clearTime' as ID */
     clearTimeout(clearTime);
   }
   stopTime();
   /* you need to call the stopTime() function to terminate the stop watch */
   window.addEventListener('load', function () {
     var stop = $('#stop');
     stop.addEventListener('click', stopTime);
   }); // stopwatch.js end
  }

  var blocks = $('[data-block]');
  var stacks = $('[data-stack]');
  var block;
  var stack;

  for (const block of blocks) {
    block.addEventListener('dragstart', dragStart);
  }

  for (const stack of stacks) {
    stack.addEventListener('drop', dragDrop);
    stack.addEventListener('dragover', dragOver);
    stack.addEventListener('dragenter', dragEnter);
  }

  function dragStart(e) {
    // check if this is last child
    if ($(this).is(':last-child')) {
      // make block invisible upon dragging
      setTimeout(() => (this.className = 'invisible'), 0);
      block = this;
      console.log('start', this);
    } else {
      e.preventDefault();
      console.log('not last child, cant drag');
    }
  }

  function dragDrop(e) {
    var valuedrag = parseInt($(block).attr('data-block'));
    var valuedrop = parseInt($(this).children().last().attr('data-block'));
    console.log(valuedrag);
    console.log(valuedrop);
    if (!valuedrop || valuedrag < valuedrop) {
      this.append(block);
      $(block).removeClass('invisible');
      console.log('drop', this);
      // win function, check if stack 3 has 4 children
      if ($('[data-stack=3]').children().length === 4) {
        $('#announce-game-won').text('Congratulations! You won!')
      }
    } else {
      e.preventDefault();
      $(block).removeClass('invisible');
    }
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function dragEnter(e) {
    e.preventDefault();
  }

});


// $(document).ready(function(){
//
//   var blocks = $('[data-block]');
//   var stacks = $('[data-stack]');
//   // var movable = $('[data-block]:last-child');
//   // movable.addClass('moveable');
//
//   var saved = null;
//
//   //function save
//   $('[data-block]').click(function(){
//     if ($(this).is(':last-child')) {
//       $(this).detach();
//       var saved = this;
//       console.log(saved);
//       //function place
//       $('[data-stack]').click(function(){
//         var value = $(this).attr('data-block')
//         //if there is no last child, and there is a saved block, append
//         if ($(this).children().length > 0) {
//           //check if children are bigger than saved block
//           parseInt(value)
//         } else {
//           $(this).append(saved);
//           console.log(saved);
//         }
//       })
//     }
//   })
// })



// function dragLeave() {
//   console.log('leave', this);
// }

// block.addEventListener('dragend', dragEnd);
// block.addEventListener('dragover', dragOver);
// block.addEventListener('dragenter', dragEnter);
// block.addEventListener('dragleave', dragLeave);
// block.addEventListener('drop', dragDrop);

// block.addEventListener('dragstart', dragStart);
// block.addEventListener('dragend', dragEnd);
// can i drag it?
// draggable function
//
// can i drop it here?
// drop place valid function


// draggable
// $('[data-stack="1"]').
// use draggable="true/false" to lock the blocks and make them draggable.
// if else statementn and .lastChild.  make the last child of data-stack have draggable="true".
