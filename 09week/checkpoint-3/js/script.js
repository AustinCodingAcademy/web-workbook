'use strict';

$(document).ready(function()  {

  //making a function to hide the video on the load of the page
  function hideVideo() {
    $('.pukeVideo').hide();
    $('#pukeAudio').hide();
  }
  hideVideo();

//this is the function I am trying to play the video
  var vid = document.getElementsByClassName("pukeVideo");
  var hey = document.getElementById('hey');
  var sound = document.getElementById('pukeAudio');

  function playVideo() {
    hey.play();
    sound.play();
  };

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
    var maxBarHeight = document.getElementById('bar').style.maxHeight = 630;
    var progress = document.getElementById('progress').childNodes[1];
    progress.style.maxHeight = 630;
    console.log(barHeight);
    var id = setInterval(progressBar, 10);
    function progressBar() {
      if (barHeight >= 630) {
        $('.pukeVideo').show();
        $('#pukeAudio').show();
        $('.background').hide();
        $('.llama-container').hide();
        audio.pause();
      }
    }
  }

  //creating a count for how many times the llama is clicked
  //calling function move inside of function counter
  $('.llama').click(function counter() {
    count++;
    barHeight+=10;
    //change back to 10
    updatedNum.text(count);
    move();
  });
  // console.log(barHeight);
  //end of function counter

  //getting the audio
  var audio = document.getElementById("audio");
  audio.currentTime = 12;
  //creating a function to play the audio on first click of the llama
  $('.llama').click(function playAudio() {
    audio.play();
  });
  //end of playAudio function

  // var vid = document.getElementById("vid");
  // $('.container').click(function playVid() {
  //   vid.play();
  // });

});
//end of document ready function
