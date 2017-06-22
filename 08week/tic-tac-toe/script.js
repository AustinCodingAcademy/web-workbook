'use strict';

$(document).ready(function() {

  var player = 1;

  //make data-cell clickable
  $('[data-cell]').on('click', function() {

    var squareSelected = $(this);

    //add an x and o class to data-cell when player clicks, alert if it already has class
    if (squareSelected.hasClass('x') || squareSelected.hasClass('o')) {
      alert ('Sorry, this square is taken. Try again.');
    } else {
      if (player == 1) {
        squareSelected.addClass('x');
        squareSelected.append(document.createTextNode('x'));

        // this is the array that the conditions will check if X is a winner

        // TODO: streamline 'check for wins' by wrapping in a function so that you have to only declare the array once and the for loop can be run simultaneously for player 1 and 2 with across, vertical and diagnol.

        var across = [ ['#square0' ,'#square1', '#square2'], ['#square3' ,'#square4', '#square5'] , ['#square6' ,'#square7','#square8']];
        var vertical = [ ['#square0' ,'#square3', '#square6'] , ['#square1' ,'#square4', '#square7'] ,['#square2' , '#square5' , '#square8']];
        var diagnol = [ ['#square0' ,'#square4', '#square8'] , ['#square2' ,'#square4', '#square6'] ];

        // this will loop and check for a win across for player 1
        for (var i=0; i<across.length; i++){
          var nestedArray = across[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('x')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                // alert ('X Wins');
                document.getElementById('title').innerHTML = "X Wins!";
              }
            }
          }
        }

        // this will loop and check for a win vertical for player 1
        for (var i = 0; i< vertical.length; i++){
          var nestedArray = vertical[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('x')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                // alert ('X Wins');
                document.getElementById('title').innerHTML = "X Wins!";
              }
            }
          }
        }
        // this will loop and check for a win diagnol for player 1
        for (var i = 0; i< diagnol.length; i++){
          var nestedArray = diagnol[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('x')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                document.getElementById('title').innerHTML = "X Wins!";

              }
            }
          }
        }
        player = 2;

      } else {
        squareSelected.addClass('o');
        squareSelected.append(document.createTextNode('o'));

        // this is the array that the conditions will check if O is a winner
        var across = [ ['#square0' ,'#square1', '#square2'], ['#square3' ,'#square4', '#square5'] , ['#square6' ,'#square7','#square8']];
        var vertical = [ ['#square0' ,'#square3', '#square6'] , ['#square1' ,'#square4', '#square7'] ,['#square2' , '#square5' , '#square8']];
        var diagnol = [ ['#square0' ,'#square4', '#square8'] , ['#square2' ,'#square4', '#square6'] ];

        // this will loop and check for a win across for player 2
        for (var i=0; i<across.length; i++){
          var nestedArray = across[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('o')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                document.getElementById('title').innerHTML = "O Wins!";

              }
            }
          }
        }

        // this will loop and check for a win vertical for player 2
        for (var i = 0; i< vertical.length; i++){
          var nestedArray = vertical[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('o')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                document.getElementById('title').innerHTML = "O Wins!";
              }
            }
          }
        }

        // this will loop and check for a win diagnol for player 2
        for (var i = 0; i< diagnol.length; i++){
          var nestedArray = diagnol[i];
          // console.log(across[i]);
          var checkArray = [];
          for (var x = 0; x< nestedArray.length; x++){
            // console.log(nestedArray[x]);
            if($(nestedArray[x]).hasClass('o')){
              checkArray.push(x);
              // console.log(checkArray);
              if (checkArray.length == 3){
                document.getElementById('title').innerHTML = "O Wins!";
              }
            }
          }
        }
        player = 1;
      }
    }
  });

  //assign function to clear board button
  $('#clear').on('click', function() {
    $('[data-cell]').removeClass('x o');
    $('[data-cell]').empty();
    player = 1;
    document.getElementById('title').innerHTML = "Tic Tac Toe";

  });
})
