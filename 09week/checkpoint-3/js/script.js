'use strict';

$(document).ready(function()  {

  //grabbing the picture of the llama
  let llamaContainer = $('div.llama-container');
  let llama = llamaContainer.children();
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var containerHeight = $('#container').height();
  var containerWidth = $('#container').width();
  // console.log(containerWidth);

  //new
  var animationName = 'animated bounce';
  var animationName2 = 'animated rotateIn';
  var animationEnd = 'webkitAnimationEnd, mozAnimationEnd, oAnimationEnd, animationend'

  // creating a function to make the llama bounce on click
  $('.llama-container').on('click', function bouncy(e) {
    $('.llama').addClass(animationName).one(animationEnd, function() {
      $(this).removeClass(animationName);
    });
    //end of animation function
    });
    //end of function bouncy

  //creating a function to make the llama flip on double click
  // $('.llama-container').on('dblclick', function dblbouncy(e) {
  //   $('.llama').addClass(animationName2).one(animationEnd, function() {
  //     $(this).removeClass(animationName2);
  //   });
  //   //end animation function
  // });
  //end of function dblbouncy

    //creating div for counter
    var countContainer = $('#count-container');
    //grabbing the number 0
    var num = $('p.update');
    var updatedNum = num.filter('p.update:last');
    //creating a count for how many times the llama is clicked
    var count = 0;
    var plusFive = 5;
    $('.llama').click(function counter(e) {
      count++;
      updatedNum.text(count);
  });
  //end of function counter

  //creating a function for the progress bar
  function move() {
    var bar = $('#bar');
    bar.height = 1;
    var int = setInterval(progressBar, 10);
    function progressBar() {
      if (bar.height >= 100) {
        clearInterval(int);
      } else {
        bar.height++;
        bar.style.height = height + '%';
      }
    }

  }
  console.log(bar);
  //function for adding 5 points to the count on a double click
  // $('.llama').dblclick(function counter2(e) {
  //   count+5;
  //   updatedNum.text(count+plusFive);
  // })

  //getting the audio
  var audio = document.getElementById("audio");
  audio.currentTime = 12;
  //creating a function to play the audio on first click of the llama
  $('.llama').click(function playAudio() {
    audio.play();
  });
  // function enableAutoPlay () {
  //   audio.autoplay;
  //   audio.autoplay = true;
  //   audio.load();
  // }
});
//end of document ready function
