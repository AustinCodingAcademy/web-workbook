'use strict';
$(document).ready(function(){
  // counter goes up every time you click on the bad guy
  var num1 = 0;
  var pup = ""; 
  var multiplier = 1; 
  let pupButtonShow = false;
  let currentLevel = 0;
  // change color at every level / powerup
  let levelArray = [1, 2, 3, 4, 5, 6, 7];
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  // bleep/blast sound on-click
  var obj = document.createElement("audio");
  var sounds = ["./bleep1.mp3", "./bleep2.mp3", "./bleep3.mp3"]
  // grab sounds
  // obj.src="https://github.com/konarie1990/web-workbook/blob/gh-pages/checkpoint-3/bleep3.mp3?raw=true";
  obj.src=sounds[Math.floor(Math.random() * sounds.length)];
  obj.volume=0.70;
  obj.autoPlay=false;
  obj.preLoad=true;       
 
  // powerup button sound on-click
  var level = document.createElement("audio");
  var hooray = ["./powerbutton.mp3"]
  // obj.src="https://github.com/konarie1990/web-workbook/blob/gh-pages/checkpoint-3/bleep3.mp3?raw=true";
  level.src=hooray[Math.floor(Math.random() * hooray.length)];
  level.volume=0.70;
  level.autoPlay=false;
  level.preLoad=true; 

  $(".powerup1").hide();

  // click the space invader is on screen-1 - only advance points when you click on powerup 
  $('#screen-1').click(function() {
    if (pupButtonShow === true) {
      return false;
    }
    obj.src=sounds[Math.floor(Math.random() * sounds.length)];
    obj.play();
    num1+= multiplier;
    $('#points').text(num1);
    if (num1 == 10) {
      pupButtonShow = true;
      $(".powerup1").show();  
      $('#message-display').children('p').text("THAT WAS EASY");
      $('#screen-1').toggle(''); 
    } 
    if ((num1 >= 50 && num1 <=52)) {
      pupButtonShow = true;
      $(".powerup1").show(); // show the powerup button
      $(".powerup1").text("Power Up 3X!"); // display message in button
      $('#message-display').children('p').text("3rd Level"); // display message for level header
      $('#screen-1').toggle('#screen-1'); // using toggle function to remove space invader on button show - feature or bug? (actually takes into account css transition ;)
    }
    if ((num1 >= 100 && num1 <=103)) {
      pupButtonShow = true;
      $(".powerup1").show();
      $(".powerup1").text("Power Up 4X!"); 
      $('#message-display').children('p').text("KEEP GOING!"); 
      $('#screen-1').toggle('#screen-1'); 
    }
    if ((num1 >= 200 && num1 <=204)) {
      pupButtonShow = true;
      $(".powerup1").show();
      $(".powerup1").text("Power Up 5X!"); 
      $('#message-display').children('p').text("5th Level"); 
      $('#screen-1').toggle('#screen-1'); 
    }
    if ((num1 >= 400 && num1 <=405)) {
      pupButtonShow = true;
      $(".powerup1").show();
      $(".powerup1").text("Power Up 6X!"); 
      $('#message-display').children('p').text("YOU CAN DO IT!!"); 
      $('#screen-1').toggle('#screen-1'); 
    }
    if ((num1 >= 800 && num1 <=806)) {
      pupButtonShow = true;
      $(".powerup1").show();
      $(".powerup1").text("Power Up 7X!"); 
      $('#message-display').children('p').text("7th Level"); 
      $('#screen-1').toggle('#screen-1'); 
    } 
    if ((num1 >= 1600 && num1 <= 1607)) {
      pupButtonShow = true;
      $(".powerup1").show();
      $(".powerup1").text("Power Up 8X!"); 
      $('#message-display').children('p').text("YOU WIN!!!"); 
      $('#screen-1').toggle('#screen-1'); 
    }       
    $('#buttonbox').append(pup);
    pup = "";
  });

  setTimeout(function() {
    $("#message-display").css("opacity", "0");
  }, 2000);

  $(".powerup1").click(function() {
    multiplier++; // add multiplier on click 
    $(".powerup1").hide().removeClass("red"); // remove class/color on click
    $('#screen-1').toggle('#screen-1'); 
    // set level by points allowed - display message
    $("#message-display").css("opacity", "1");
    currentLevel++;
    if (num1 >= 10 || num1 >= 50 || num1 >= 100 || num1 >= 200 || num1 >= 400 || num1 >= 800 || num1 >= 1600) {
      pupButtonShow = false;
    }
    level.src=hooray[Math.floor(Math.random() * hooray.length)];
    level.play();
    setTimeout(function() {
      $("#message-display").css("opacity", "0");
    }, 2000);
  });
  
  // loop is running to watch for level and set color from array 
  setInterval(function colorChange() {
    let i = 0;
    for (i = 0; i < levelArray.length; i++) {
      if (currentLevel === i) {
        $(".powerup1").addClass(colors[i]);
        $("#screen-1").addClass(colors[i]);
        $("#points").addClass(colors[i]);
      }
    }
  }, 200);


});

// old code no longer in use - there was a lot more but i kept the code below - original code (css included) has been reduced about 50%
// $(".powerup2").click(function() {
//   multiplier++;
//   $(".powerup2").hide();
//   $("#screen-1").css('border', 'dashed 3px yellow');
//   $('#points').css('border', 'double 5px yellow');
//   $('#message-display').html('<p>That Was Easy...</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// $(".powerup3").click(function() {
//   multiplier++;
//   $(".powerup3").hide();
//   $("#screen-1").css('border', 'dashed 3px green');
//   $('#points').css('border', 'double 5px green');
//   $('#message-display').html('<p>Keep it up!</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// $(".powerup4").click(function() {
//   multiplier++;
//   $(".powerup4").hide();
//   $("#screen-1").css('border', 'dashed 3px blue');
//   $('#points').css('border', 'double 5px blue');
//   $('#message-display').html('<p>Not Bad</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// $(".powerup5").click(function() {
//   multiplier++;
//   $(".powerup5").hide();
//   $("#screen-1").css('border', 'dashed 3px indigo');
//   $('#points').css('border', 'double 5px indigo');
//   $('#message-display').html('<p>Almost There!</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// $(".powerup6").click(function() {
//   multiplier++;
//   $(".powerup6").hide();
//   $("#screen-1").css('border', 'dashed 3px violet');
//   $('#points').css('border', 'double 5px violet');
//   $('#message-display').html('<p>Relentless!</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// $(".powerup7").click(function() {
//   multiplier++;
//   $(".powerup7").hide();
//   $("#screen-1").css('border', 'dashed 3px red');
//   $('#points').css('border', 'double 5px red');
//   $('#message-display').html('<p>You Did It!!!</p>');
//   level.src=hooray[Math.floor(Math.random() * hooray.length)];
//   level.play();
// });

// when counter reaches 100 create a new button
