'use strict';

$(document).ready(function() {
  let score = 0;
  let point1 = 30;
  let point2 = 20;
  let point3 = 10;
  $('#hun').fadeTo("slow", 0.15);
  $('#thou').fadeTo("slow", 0.15);
  $('#tenthou').fadeTo("slow", 0.15);
  $('#hunthou').fadeTo("slow", 0.15);
  $('#restart').click(function() {
    score = 0;
    point1 = 30;
    point2 = 20;
    point3 = 10;
    $('#hun').fadeTo("slow", 0.15);
    $('#thou').fadeTo("slow", 0.15);
    $('#tenthou').fadeTo("slow", 0.15);
    $('#hunthou').fadeTo("slow", 0.15);
    $('#score').text(score);
  })
  $('#throw').click(function() {

    let point = 0;
    point = Math.floor((Math.random() * 4) + 1);
    if (point === 1) {
      //score+=30;
      score += point1;
      $('#score').text(score);
      //print the message "You scored 30 points"
      $("#result").text(`You scored ${point1} points`);
      //Blink the red circle
      $("#innermost-circle").fadeTo("slow", 0.15);
      $("#innermost-circle").fadeTo("slow", 1);
    } else if (point === 2) {
      //score+=20;
      score += point2;
      $('#score').text(score);
      //print the message "You scored 20 points"
      $('#result').text(`You scored ${point2} points`);
      //Blink the grey circle
      $("#inner-circle").fadeTo("slow", 0.15);
      $("#inner-circle").fadeTo("slow", 1);
    } else if (point === 3) {
      //score+=10;
      score += point3;
      $('#score').text(score);
      //print the message "You scored 10 points"
      $('#result').text(`You scored ${point3} points`);
      //Blink the blue circle
      $("#outer-circle").fadeTo("slow", 0.15);
      $("#outer-circle").fadeTo("slow", 1);
    } else {
      //print the message "You scored 0 points"
      $('#result').text('You scored 0 points');
    }
    if (score > 100) {
      $('#hun').fadeTo("slow", 1);
      point1 = 60;
      point2 = 40;
      point3 = 20;
    }

    if (score > 1000) {
      $('#thou').fadeTo("slow", 1);
      point1 = 600;
      point2 = 400;
      point3 = 200;
    }

    if (score > 10000) {
      $('#tenthou').fadeTo("slow", 1);
      point1 = 6000;
      point2 = 4000;
      point3 = 2000;
    }

    if (score > 100000) {
      $('#hunthou').fadeTo("slow", 1);
    }
  })
});
