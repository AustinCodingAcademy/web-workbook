'use strick';
$(document).ready(function() {
  var playerOne = 'X';
  var playerTwo = 'O';
  var turn = 1;
  var played = false;
  var sound = document.createElement('audio');
  sound.setAttribute('src', 'sonic1.mp3');
  $.get();
  var played1 = false;
  var sound1 = document.createElement('audio');
  sound1.setAttribute('src', 'sonic2.mp3');
  $.get();
  var p1 = false;
  var noise = document.createElement('audio');
  noise.setAttribute('src', 'p1.mp3');
  $.get();
  var p2 = false;
  var jangle = document.createElement('audio');
  jangle.setAttribute('src', 'p2.mp3');
  $.get();
  var game = document.createElement('audio');
  game.setAttribute('src', 'play_a_game.mp3');
  $.get();

  // alert("Shall we play a game?");
  // game.play();
    $('#start').click(function(){
    game.play();
});


  $('[data-cell]').click(function() {
    // sound.play();
    // played = true;
    // console.log("Playing");
  });
  $('[data-cell]').click(function() {

    if (turn % 2 === 1) {
      $(this).text(playerOne);
      checkPlayerWin(playerOne);
      sound.play();
    } else {
      $(this).text(playerTwo);
      checkPlayerWin(playerTwo);
      sound1.play();
    }
    turn++;
  });
  $("#clear").on('click', function(event) {
    // event.preventDefault();
    console.log("clear button pushed");
    $("div .box[data-cell], #clear,  #announce-winner").fadeOut(1000, function() {
      $("div .box[data-cell]").empty();
      $('#announce-winner').empty();
      $("div .box, #clear,  #announce-winner").fadeIn(1000);
      // playerTurn = 'X';
    })
  })

  //check winner
  // if (checkPlayerWin()) {
  //
  //   $('#announce-winner').text('playerOne' + "Wins");
  //   alert('this is a start!');
  // }


  function checkPlayerWin(player) {
    if (($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="8"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="0"]').text() === playerOne) ||
      ($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="6"]').text() === playerOne) ||
      ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) ||
      ($('[data-cell="2"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne)) {

      // alert("Player \ " + player + "\ Wins!");
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
      noise.play();


      // (($('[data-cell="0"]').text() === "playerTwo" && $('[data-cell="1"]').text() === "playerTwo" && $('[data-cell="2"]').text() === "playerTwo") {
      //    console.log('playerTwo');

      // if (($('[data-cell="0"]').text()) === player) {
      // return true;
    } else if (($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="8"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="0"]').text() === playerTwo) ||
      ($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="6"]').text() === playerTwo) ||
      ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) ||
      ($('[data-cell="2"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo)) {



      // alert("Player \ " + player + "\ Wins!");
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
      jangle.play();

      // console.log('playerTwo wins');

    }


  }
  // return false;


});

//investigate (is)
