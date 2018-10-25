'use strict';

$(document).ready(function () {
  //Set up global variables
  let score = 0;
  let multiplier;
  let gameOver = false;
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  $("#cookie").click(function () { //When Cookie image is clicked
    if (!gameOver) { //If game over has not happened
      $(this).addClass('on'); //Add 'on' class to cookie
      $(this).one(animationEvent, function (event) { //When animation ends, remove class
        $(this).removeClass('on')
      });

      //Increase counter by 1 point each click
      multiplier = parseInt($("#clicker-multiplier").text());
      score += multiplier; //Add multiplier amount to current score to get new score
      $("#clicker-score").text(score); //Update score text
    }
  });

  $("#btnspend100").mousedown(function () { //On mouse down event for first bonus button
    if (!gameOver) //If game over has not happened, allow click
    {
      if (score >= 100) { //If player score is greater or equal to 100
        $(this).css("background-color", "limegreen"); //Turns button color green
        score -= 100; //Subtract 100 from player score
        multiplier++; //Increase multiplier by one
        $("#clicker-multiplier").text(multiplier); //Update multiplier text
      } else { //If player score not over 100
        $(this).css("background-color", "red"); //Turn button color red
        $("#message").text("You do not have enough points!") //Display message to player
      }
    }
  });

  $("#btnspend500").mousedown(function () { //On mouse down event for second bonus button, same as above button
    if (!gameOver) {
      if (score >= 1000) {
        $(this).css("background-color", "limegreen");
        score -= 1000;
        multiplier *= 2;
        $("#clicker-multiplier").text(multiplier);
      } else {
        $(this).css("background-color", "red");
        $("#message").text("You do not have enough points!")
      }
    }
  });
  $("input").mouseup(function () { //On any inputs mouse up(Only ones are both bonus buttons)
    $(this).css("background-color", "dodgerblue"); //Return buttons to original color
    $("#message").text(""); //Remove message text
  });

  function incrementCounter() {
    if (!gameOver) { //If game over has not happened
      multiplier = parseInt($("#clicker-multiplier").text()); //Bind multiplier text to variable
      score += (1 * multiplier); //Set score equal to score plus multiplier
      $("#clicker-score").text(score); //Update current score
    }
  }
  setInterval(incrementCounter, 1000); //Runs IncrementCounter function once every second


  let count = 60; //Start with 60 seconds on timer

  let counter = setInterval(timer, 1000); //Run it every 1 second

  function timer() { //Timer to count down every second 
    count = count - 1;
    $("#timer").text("Timer: " + count);
    if (count <= 0) {
      clearInterval(counter);
      $("#timer").text("Time Up!"); //Display Time up to player
      $("#clicker-score").text("Final Score: " + score)
      gameOver = true; //Set game over to true
      return;
    }
  }
});