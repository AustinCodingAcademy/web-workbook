'use strict';

$(document).ready(function() {
  // targets first child of all the data blocks
  let topBlock = $('[data-block]:first-child');
  // adds a class to moveable to all first child elements
  topBlock.addClass('moveAble');

  $('.draggable').draggable({
      revert: true
  });
  var count = 0;
  $('#dropArea1, #dropArea2, #dropArea3').droppable({
    // accepts only items with moveable class.
    accept: ".moveAble",
    drop: function (event, ui){
      console.log('counter is ' + count);
      var drag = $(ui.draggable).data('block');
      console.log(drag);
      var last = $(this).children().last().data('block');
      console.log(last);
      if (drag > last){
        $(ui.draggable).draggable( "option", "revert", true );
      } else {
        $(ui.draggable).prependTo(this).attr('style', 'position: relative');
        //move block is set to the data-block as an array
        //if there is more than one first child
        topBlock = $('[data-block]:first-child');
        console.log(topBlock)
        // removes all the moveable classes
        $('[data-block]').removeClass('moveAble');
        // adds class move to first child data-blocks
        topBlock.addClass('moveAble');
        // add to moveCounter
        count++;
        moveCount();
        console.log(count);
      }
    checkWin();
    }
  })
  function checkWin(){
    if($('[data-stack=3]').children().length == 4){
      $('#announce-game-won').text('Congratulations! You win!');
      // stop time
      stop();
    }

  }

  // move counter
  function moveCount() {
    $('#moveCounter').text('Moves: ' + count);
  }

  // timer
  let timer;
  let i = 0;
  let divide = 1;
  let min = 0;

  const start = () => {
    timer = self.setInterval(function() {
      increment()
    }, 1000);
  }

  const increment = () => {
    i++;
    minute();
    document.getElementById('sec').innerHTML = (i / divide) + ' Sec';

  }
  // stop time upon win
  const stop = () => {
    clearTimeout(timer)
  }

  const minute = () => {
    if (i == 60) {
      min++;
      document.getElementById('min').innerHTML = min + ' Min';
      i = 0;
    }
  }
  // start timer
  $('#trigger').one('mousedown', function() {
    start();
  })
  // reset game
  $('#reset').click(function() {
      location.reload();
  })


})








//   var blocks = $('[data-block]');
//   var stacks = $('[data-stack]');
//   var block;
//   var stack;
//
//   for (const block of blocks) {
//     block.addEventListener('dragstart', dragStart);
//   }
//
//   for (const stack of stacks) {
//     stack.addEventListener('drop', dragDrop);
//     stack.addEventListener('dragover', dragOver);
//     stack.addEventListener('dragenter', dragEnter);
//   }
//
//   function dragStart(e) {
//     // check if this is last child
//     if ($(this).is(':last-child')) {
//       // make block invisible upon dragging
//       setTimeout(() => (this.className = 'invisible'), 0);
//       block = this;
//       console.log('start', this);
//     } else {
//       e.preventDefault();
//       console.log('not last child, cant drag');
//     }
//   }
//
//   function dragDrop(e) {
//     var valuedrag = parseInt($(block).attr('data-block'));
//     var valuedrop = parseInt($(this).children().last().attr('data-block'));
//     console.log(valuedrag);
//     console.log(valuedrop);
//     if (!valuedrop || valuedrag < valuedrop) {
//       this.append(block);
//       $(block).removeClass('invisible');
//       console.log('drop', this);
//       // win function, check if stack 3 has 4 children
//       if ($('[data-stack=3]').children().length === 4) {
//         $('#announce-game-won').text('Congratulations! You won!')
//       }
//     } else {
//       e.preventDefault();
//       $(block).removeClass('invisible');
//     }
//   }
//   function dragOver(e) {
//     e.preventDefault();
//   }
//   function dragEnter(e) {
//     e.preventDefault();
//   }
//





// timer
 //  var clear;
 //  function stopWatch() {
 //    clear = setTimeout(function() {}, 1000);
 //  }
 //  var count = 0;
 //  var clearTime;
 //  var seconds = 0, minutes = 0, hours = 0;
 //  var clearState;
 //  var secs, mins, hrs;
 //  function startWatch() {
 //     if (seconds === 60) {
 //       seconds = 0; minutes = minutes + 1;
 //     }
 //     mins = (minutes < 10) ? ('0' + minutes + ': ') : (minutes + ': ');
 //     if (minutes === 60) {
 //       minutes = 0; hours = hours + 1;
 //     }
 //     hrs = (hours < 10) ? ('0' + hours + ': ') : (hours + ': ');
 //     secs = (seconds < 10) ? ('0' + seconds) : seconds;
 //     // display the stopwatch
 //     var x = $('#timer');
 //     x.innerHTML = 'Time: ' + hrs + mins + secs;
 //     seconds++;
 //     clearTime = setTimeout(function startWatch() {}, 1000);
 //   }
 //     //create a function to start the stop watch
 //  function startTime() {
 //  if (seconds === 0 && minutes === 0 && hours === 0) {
 //   /* hide the fulltime when the stop watch is running */
 //   var fulltime = $('#fulltime');
 //   fulltime.style.display = "none";
 //   /* hide the start button if the stop watch is running */
 //   this.style.display = "none";
 //   /* call the startWatch() function to execute the stop watch whenever the startTime() is triggered */
 //   startWatch();
 // }}
 //   window.addEventListener('load', function() {
 //     var start = $('#start');
 //     start.addEventListener('click', startTime);
 //  });
 //
 // // stop the time function
 // function stopTime() {
 //   if (seconds !== 0 || minutes !== 0 || hours !== 0) {
 //     /* display the full time before reseting the stop watch */
 //     var fulltime = $('#fulltime');
 //     //display the full time
 //     fulltime.style.display = "block";
 //     var time = hrs + mins + secs;
 //     fulltime.innerHTML = 'Fulltime: ' + time;
 //     // reset the stop watch
 //     seconds = 0; minutes = 0; hours = 0;
 //     secs = '0' + seconds;
 //     mins = '0' + minutes + ': ';
 //     hrs = '0' + hours + ': ';
 //     /* display the stopwatch after it's been stopped */
 //     var x = $('#timer');
 //     var stopTime = hrs + mins + secs;
 //     x.innerHTML = stopTime;
 //     /* display all stop watch control buttons */
 //     var showStart = $('#start');
 //     showStart.style.display = "inline-block";
 //     var showStop = $('#stop');
 //     showStop.style.display = "inline-block";
 //     /* clear the stop watch using the setTimeout() return value 'clearTime' as ID */
 //     clearTimeout(clearTime);
 //   }
 //   stopTime();
 //   /* you need to call the stopTime() function to terminate the stop watch */
 //   window.addEventListener('load', function () {
 //     var stop = $('#stop');
 //     stop.addEventListener('click', stopTime);
 //   }); // stopwatch.js end
 //  }
