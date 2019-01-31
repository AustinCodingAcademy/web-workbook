'use strict';

$(document).ready(function() {
  // targets first child (first data-block div in #dropArea parent div) in stack parent element
  let topBlock = $('[data-block]:first-child');
  // adds a class to movable to all first child elements
  topBlock.addClass('movable');
  // give all elements with draggable class revert property at start
  $('.draggable').draggable({
      revert: true
  });
  // move counter to be incremented with each successful (non-reverted) move
  let count = 0;
  // elements with with these classes, give droppable property with following logic...
  $('#dropArea1, #dropArea2, #dropArea3').droppable({
    // accept is a droppable atribute/property that takes an identifier as a string
    // so accepting only items with movable class.
    accept: ".movable",
    // drop attribute of draggable takes a function
    // this is the place to put drop function that defines drop logic
    drop: function (event, ui){
      console.log('counter is ' + count);
      // grabs data-block value (number) of element being dragged
      const drag = $(ui.draggable).data('block');
      console.log('drag', drag);
      // store data-block value of first child in this variable
      let first = $(this).children().first().data('block');
      console.log('first', first);
      // if block being dragged has data-block value
      if (drag > first){
        $(ui.draggable).draggable( "option", "revert", true );
      } else {
        console.log('this', this)
        $(ui.draggable).prependTo(this).attr('style', 'position: relative');
        //move block is set to the data-block as an array
        //if there is more than one first child
        topBlock = $('[data-block]:first-child');
        console.log('topBlock', topBlock)
        // removes all the movable classes
        $('[data-block]').removeClass('movable');
        // adds class movable to first child data-blocks
        topBlock.addClass('movable');
        // increment number in #moveCounter element
        count++;
        moveCount();
        console.log('count', count);
      }
      // check for win after every drop
    checkWin();
    }
  })

  const checkWin = () => {
    // check data-stack with value 3 for 4 children
    // if true, insert win text into div with id 'accounce-game-won'
    if($('[data-stack=3]').children().length === 4){
      $('#announce-game-won').text('Congratulations! You win!');
      // stop time
      stop();
    }
  }
  // move counter
  const moveCount = () => {
    $('#moveCounter').text('Moves: ' + count);
  }
  // timer
  let timer;
  let sec = 0;
  let min = 0;
  // start timer handler function
  const start = () => {
    // execute increment function every second and store value in timer variable
    timer = self.setInterval(function() {
      increment()
    }, 1000);
  }
  // function increment sec variable by one and executes minute function
  const increment = () => {
    sec++;
    minute();
    // insert sec variable value and text in #sec element
    document.getElementById('sec').innerHTML = sec + ' Sec';
  }
  // stop time upon win
  const stop = () => {
    // cancels repeated action set by setInterval method
    clearInterval(timer)
  }
  // logic for conditons that lead to increment of min variable
  const minute = () => {
    if (sec === 60) {
      // when seconds reach 60, reset to 0, and increment min variable by 1
      min++;
      document.getElementById('min').innerHTML = min + ' Min';
      sec = 0;
    }
  }
  // start timer
  // element with id "trigger" with event handler "mousedown"
  $('#trigger').one('mousedown', function() {
    // execute start function only upon first click of #trigger element
    start();
  })
  // reset game
  // button element wtih "reset" id execute this function upon click
  $('#reset').click(function() {
      // this function resets the page
      // location is an object that refers to the location (site url) of
      // the object it is attached to, reload is a function that refreshes
      // the page
      window.location.reload();
  })
})






// ** another drag/drop logic without using qjuery ui draggable property

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
