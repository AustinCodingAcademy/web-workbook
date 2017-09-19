'use strict';

$(document).ready(function() {

  var points = 0;
  var lvl_counter = 0;
  var timer_yes = 0; //allows reset to stop the timer
  var moves = 0;
  var timeleft = 120;
  var timeleft_mod = timeleft%60;

  function CustomAlert() {
    this.render = function(dialog) {
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      var allbadges = document.getElementById('dialogboxbadges_div');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH + "px";
      dialogbox.style.left = (winW/2) - (550 * .5)+"px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
      document.getElementById('dialogboxhead').innerHTML = "Acknowledge this message";
      document.getElementById('dialogboxbody').innerHTML = dialog;
      document.getElementById('dialogboxfoot').innerHTML = '<button id="ok_button">OK</button>';

      $('#ok_button').click(function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
      })
    }
  }
  var Alert = new CustomAlert();



  $('#start_button').click(function() {
    timer_yes = 1;
    lvl_counter = 1;
    document.getElementById( '25' ).style.display = 'block';
    document.getElementById('level_num').innerHTML = "Level " + lvl_counter + "/4";
  })


  $('#start_button').click(function onTimer() {

    if ((timeleft_mod).toString().length == 1) {
    document.getElementById('time').innerHTML = Math.floor(timeleft/60) + ":0" + timeleft%60;
    } else {
    document.getElementById('time').innerHTML = Math.floor(timeleft/60) + ":" + timeleft%60;
    }

    if (timer_yes > 0) {
    timeleft--;
    timeleft_mod = timeleft%60; }
    console.log("Timeleft: " + timeleft + ", Timeleft_mod: " + timeleft_mod + " lvl_counter: " + lvl_counter + " Moves: " + moves);
    if (timeleft < 0) {
      Alert.render('Game Over!');
    }
    else {
      setTimeout(onTimer, 1000);
    }
  });

  $('#reset_button').click(function () {
    location.reload();
    // points = 0;
    // lvl_counter = 0;
    // timer_yes = 0;
    // timeleft = 60;
    // timeleft_mod = 0;
    // var midblocks = $("#mid_stack").children().length;
    // var endblocks = $("#winner").children().length;
    //
    // for (var i=0; i<midblocks; i++){ //move blocks back to start
    //   $block = $('#mid_stack').children().first().detach();
    //   $('#start_stack').append($block);
    // }
    //
    // for (var i=0; i<endblocks; i++){ //move blocks back to start
    //   $block = $('#winner').children().first().detach();
    //   $('#start_stack').append($block);
    // }
    //
    // document.getElementById( '100' ).style.display = 'none';
    // document.getElementById( '75' ).style.display = 'none';
    // document.getElementById( '50' ).style.display = 'none';
    // document.getElementById( '25' ).style.display = 'none';
    // document.getElementById('time').innerHTML = "1:00";
  })

  var $block = null;
  $('[data-stack]').click(function() {
    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
      // console.log($block.attr("data-block"),$(this).children().last().attr("data-block"))
      if(Number(($block.attr("data-block")))>Number($(this).children().last().attr("data-block"))) {
        Alert.render("BAD MOVE");
      } else {
      $(this).append($block);
      $block = null;
      moves++;
      // console.log($("#winner").children().length);
    }
    }

    if ($("#winner").children().length>0) {
      endgame();
    }

  })

  //win condition
  function endgame() {
    if ($("#winner").children().length==lvl_counter) {

      if (lvl_counter<5) {
        setTimeout( function(){

          Alert.render("Level " + lvl_counter + " Completed!");
          document.getElementById('dialogboxbadges_div').style.display = "flex";
          document.getElementById('diabadge_done').style.display = "flex";
          document.getElementById('diabadge_time').style.display = "flex";
          document.getElementById('diabadge_moves').style.display = "flex";
          document.getElementById(lvl_counter+'a').style.display = "block";
          document.getElementById('badgetalk1').style.display = "block";
          if (timeleft > 60) {
            document.getElementById('diabadge_time').style.display = "flex";
            document.getElementById(lvl_counter+'b').style.display = "block";
            document.getElementById('badgetalk2').style.display = "block";
            }
          if (((lvl_counter==1)&&(moves==1))||((lvl_counter==2)&&(moves==4))||((lvl_counter==3)&&(moves==8))||((lvl_counter==4)&&(moves==16))) {
            document.getElementById('diabadge_moves').style.display = "flex";
            document.getElementById(lvl_counter+'c').style.display = "block";
            document.getElementById('badgetalk3').style.display = "block";
            }
          lvl_counter++;
          timeleft=120;
          moves=0;
          document.getElementById('level_num').innerHTML = "Level " + lvl_counter + "/4";
          if (lvl_counter < 5) {
          var block_id = lvl_counter*25;
          document.getElementById( block_id ).style.display = 'block';
          }

          for (var i=0; i<lvl_counter; i++){ //move blocks back to start
            $block = $('#winner').children().first().detach();
            $('#start_stack').append($block);
          }

    }, 250);
  }
}
}
});
