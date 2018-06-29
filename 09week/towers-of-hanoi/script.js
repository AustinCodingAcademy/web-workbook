'use strict';

$(document).ready(function() {
  //targets last child of all the data blocks
  let lastBlock = $('[data-block]:last-child');
  // adds a class to moveable to all last child elements
  lastBlock.addClass('moveAble');

  $('.draggable').draggable({
      revert: true
  });
  var count = 0;
  $('#dropArea1, #dropArea2, #dropArea3').droppable({
    //accepts only items with moveable class.
    accept: ".moveAble",
    drop: function (event, ui){
      console.log('counter is ' + count);
      var drag = $(ui.draggable).data('block');
      console.log(drag);
      var last = $(this).children().last().data('block');
      console.log(last);
      if(drag > last){
        $(ui.draggable).draggable( "option", "revert", true );
      }else{
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        //move block is set to the data-block as an array
        //if there is more than one last child
        lastBlock = $('[data-block]:last-child');
        console.log(lastBlock)
        // removes all the moveable classes
        $('[data-block]').removeClass('moveAble');
        // adds class move to child last data-blocks
        lastBlock.addClass('moveAble');
    }
  checkWin();
  }
})
function checkWin(){

  if($('[data-stack=3]').children().length == 4){
    $('#announce-game-won').text('Congratulations! You won!');
    stop();
  }
}
let timer
let i = 0;
let divide = 1;
let min = 0;
const start = () => {
  timer = self.setInterval(function() {
    increment()
  }, 1000);
}
const increment = () => {
  i++
  document.getElementById('sec').innerHTML = (i / divide) + ' Sec'
  minute();
}

const stop = () => {
  clearTimeout(timer)
}

const minute = () => {
  if (i == 60) {
    min++
    document.getElementById('min').innerHTML = min + ' Min';
  }
  if (i == 60) {
    i = 0
  }
}

$('#trigger').one('mousedown', function(){
  start();
})



})
// 'use strict';
//
// $(document).ready(function() {
//
//   let lastBlock = $('[data-block]:last-child');
//
//   lastBlock.addClass('moveAble');
//
//   $('.draggable').draggable({
//     revert: true
//   })
//   var count = 0;
//   $('#dropArea, #dropArea, #dropArea').droppable({
//      //accepts only items with moveable class.
//      accept: ".moveAble",
//      drop: function (event, ui){
//        console.log('counter is ' + count);
//        var drag = $(ui.draggable).data('block');
//        console.log(drag);
//        var last = $(this).children().last().data('block');
//        console.log(last);
//        if(drag > last){
//          $(ui.draggable).draggable( "option", "revert", true );
//    }else{
//      $(ui.draggable).appendTo(this).attr('style', 'position: relative');
//      //move block is set to the data-block as an array
//      //if there is more than one last child
//      lastBlock = $('[data-block]:last-child');
//      console.log(lastBlock)
//      // removes all the moveable classes
//      $('[data-block]').removeClass('moveAble');
//      // adds class move to child last data-blocks
//      lastBlock.addClass('moveAble');
//    }
//       checkWin();
//     }
//   })
//
//   function checkWin() {
//     if($('[data-stack=3]').children().length === 4) {
//       $('#announce-game-won').text('Winner');
//     }
//   }
//
// // move moveCounter
//
// // var move =
//
// //timer
//
// // const start = () => {
// //   timer = self.setInterval(function () {
// //     increment()
// //   }, (1000/divide));
// // }
// // $('[data-block=25]').addEventListener('click', start)
// //
// //   let timer;
// //   let i = 0;
// //   let divide = 1;
// //
// //   const increment = () => {
// //     i++;
// //     document.getElementById('time').innerHTML = (i/divide);
// //   }
// //   start();
// //
// //   const stop = () => {
// //     clearTimeout(timer);
// //   }
// //
// //   document.getElementById('button').addEventListener('click', start);
// //   document.getElementById('button2').addEventListener('click', stop);
//
//   // if(document.getElementById('time') == 60) {
//   //   document.getElementById('time').innerHTML = += 1
//   // }
//
//   // more timer code
//
//
//   let timer;
//   let i = 0;
//   let divide = 1;
//   let min = 0;
//   const start = () =>{
//     timer = self.setInterval(function() {
//       increment()
//       }, 1000);
//     }
//     const increment = () => {
//       i++;
//       document.getElementById('sec').innerHTML = (i/divide) + ' Sec';
//       minute();
//     }
//
//     const stop = () => {
//       clearTimeout(timer);
//     }
//
//     const minute = () => {
//       if (i == 60) {
//         min++
//         document.getElementById('min').innerHTML = min + ' Min';
//         }
//         if (i == 60) {
//           i = 0;
//         }
//       }
//
//   $('[data-block=25]').one('click', start)



// draggable method


// })


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
