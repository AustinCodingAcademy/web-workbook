'use strict';

$(document).ready(function()  {

  //grabbing the picture of the llama
  let llamaContainer = $('div.llama-container');
  let llama = llamaContainer.children();

  //new
  var animationName = 'animated bounce';
  var animationEnd = 'webkitAnimationEnd, mozAnimationEnd, oAnimationEnd, animationend';

  // creating a function to make the llama bounce on click
  $('.llama-container').on('click', function bouncy(e) {
    $('.llama').addClass(animationName).one(animationEnd, function() {
      $(this).removeClass(animationName);
    });
    //end of animation function
  });
  //end of function bouncy

  var countContainer = $('#count-container');
  //grabbing the number 0
  var num = $('p.update');
  var updatedNum = num.filter('p.update:last');
  var count = 0;
  var barHeight = 0;

  //creating a function to increase the bar height by 10px each click
  function move() {
    var bar = $('#bar').height(barHeight);
  }

  //creating a count for how many times the llama is clicked
  //calling function move inside of function counter
  $('.llama').click(function counter() {
    count++;
    barHeight+=10;
    updatedNum.text(count);
    move();
  });
  //end of function counter

  //creating a function for the progress bar
 //  function winner() {
 //   var int = setInterval(progressBar, 10);
 //   function progressBar() {
 //     if (barHeight >= 100) {
 //       clearInterval(int);
 //     } else {
 //       updatedNum.text(barHeight);
 //     }
 //   }
 // }

  //getting the audio
  var audio = document.getElementById("audio");
  audio.currentTime = 12;
  //creating a function to play the audio on first click of the llama
  $('.llama').click(function playAudio() {
    audio.play();
  });
  //end of playAudio function

});
//end of document ready function
